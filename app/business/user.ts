import * as crypto from "crypto";

enum UserRole {
  ADMIN = "admin",
  CUSTOMER = "customer",
}

class User {
  readonly slug?: string;
  id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;

  static users: Map<string, User> = new Map();

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    role: UserRole
  ) {
    if (name == "" || name == undefined || name == null) {
      throw new Error("Name is required");
    }
    if (email == "" || email == undefined || email == null) {
      throw new Error("Email is required");
    }
    if (password == "" || password == undefined || password == null) {
      throw new Error("Password is required");
    }
    if (role !== UserRole.ADMIN && role !== UserRole.CUSTOMER) {
      throw new Error("Invalid role");
    }
    if (id == "" || id == undefined || id == null) {
      throw new Error("Id is required");
    }

    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = role;
  }
  setPassword(password: string): void {
    this.password = crypto
      .createHmac("sha256", "secret")
      .update(password)
      .digest("hex");
  }
  //verify password
  //TODO: Change the secret key to a more secure one with a value that is not hardcoded
  private async getPassword(): Promise<string> {
    return this.password;
  }
  async verifyPassword(password: string): Promise<boolean> {
    const hashedPassword = await this.getPassword();
    return crypto.timingSafeEqual(
      Buffer.from(hashedPassword),
      Buffer.from(
        crypto.createHmac("sha256", "secret").update(password).digest("hex")
      )
    );
  }

  async createUser(
    name: string,
    email: string,
    password: string,
    role: UserRole
  ): Promise<User> {
    const user = new User(crypto.randomUUID(), name, email, password, role);
    User.users.set(user.id, user);
    return user;
  }
  async updateUser(
    id: string,
    email: string,
    password: string,
    role: UserRole
  ): Promise<User> {
    const user = User.users.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    user.email = email;
    user.password = password;
    user.role = role;
    User.users.set(user.id, user);
    return user;
  }
  async deleteUser(id: string): Promise<void> {
    const user = User.users.get(id);
    if (!user) {
      throw new Error("User not found");
    }
    User.users.delete(id);
  }
  async getUser(id: string): Promise<User | undefined> {
    return User.users.get(id);
  }
}
export default { User, UserRole };
