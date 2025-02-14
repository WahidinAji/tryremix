export default function Login() {
  return (
    <>
      <div>
        <p> harus login </p>
        <form method="post">
          <input name="name" id="name" placeholder="username" />
          <input type="password" name="password" id="password" />
        </form>
      </div>
    </>
  );
}
