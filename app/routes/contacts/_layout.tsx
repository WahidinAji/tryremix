import { LoaderFunctionArgs } from "@remix-run/node";
import {
  Form,
  Link,
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
  useSubmit,
} from "@remix-run/react";
import { ContactRecord, createEmptyContact, getContacts } from "../../data";
import { useEffect, useState } from "react";

export async function loader(args: LoaderFunctionArgs) {
  // export async function loader() {
  const url = new URL(args.request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
  //return json({ contacts, q });
}
export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
  // return { contact: contact };
};

export default function ContactLayout() {
  const { contacts, q } = useLoaderData<typeof loader>();
  const navigation = useNavigation();
  const submit = useSubmit();
  const [, setQuery] = useState(q || "");
  useEffect(() => {
    // const abort = new AbortController();
    // const searchField = document.getElementById("q");
    // if (searchField instanceof HTMLInputElement) {
    //   searchField.value = q || "";
    // }
    // abort.abort();
    setQuery(q || "");
  }, [q]);

  //add spinner
  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");
  return (
    <>
      <div id="sidebar">
        <h1>
          <Link to="/contacts">Remix Contacts</Link>
        </h1>
        <div>
          <Form
            id="search-form"
            role="search"
            onChange={(e) => {
              const isFIrstSearch = q === null;
              submit(e.currentTarget, {
                replace: !isFIrstSearch,
              });
            }}
          >
            <input
              className={searching ? "loading" : ""}
              id="q"
              aria-label="Search contacts"
              // defaultValue={q || ""}
              placeholder="Search"
              type="search"
              name="q"
              // onChange={(e) => setQuery(e.currentTarget.value)}
              // value={query}
            />
            <div id="search-spinner" aria-hidden hidden={!searching} />
          </Form>
          <Form method="post">
            <button type="submit">New</button>
          </Form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact: ContactRecord) => (
                <li key={contact.id}>
                  <NavLink
                    className={({ isActive, isPending }) =>
                      isActive ? "active" : isPending ? "pending" : ""
                    }
                    // to={`contacts/${contact.id}`
                    to={`${contact.id}`}
                  >
                    {contact.first || contact.last ? (
                      <>
                        {contact.first} {contact.last}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite ? <span>*</span> : null}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts found.</i>
            </p>
          )}
        </nav>
      </div>
      <div
        id="detail"
        className={
          navigation.state === "loading" && !searching ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}
