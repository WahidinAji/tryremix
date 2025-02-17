import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, Outlet, useFetcher, useLoaderData } from "@remix-run/react";
import { FunctionComponent } from "react";
import invariant from "tiny-invariant";
import { ContactRecord, getContact, updateContact } from "~/data";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param");
    const contact = await getContact(params.contactId);
    if (!contact) {
        throw new Response("Not Found", { status: 404 });
    }
    return { contact: contact };
};
export const action = async ({ params, request }: ActionFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param");
    const formData = await request.formData();
    return updateContact(params.contactId, {
        favorite: formData.get("favorite") === "true",
    });
};

export default function ContactDetail() {
    const { contact } = useLoaderData<typeof loader>();
    return (
        <>
            <div id="contact">
                <div>
                    <img
                        src={contact.avatar}
                        alt={`${contact.avatar} ${contact.last} avatar`}
                    />
                </div>
                <div>
                    <h1>
                        {contact.first || contact.last ? (
                            <>
                                {contact.first} {contact.last}
                            </>
                        ) : (
                            <i>No Name</i>
                        )}{" "}
                        <Favorite contact={contact} />
                    </h1>
                    {contact.twitter ? (
                        <p>
                            <a href={`https://twitter.com/${contact.twitter}`}>
                                {contact.twitter}
                            </a>
                        </p>
                    ) : null}

                    {contact.notes ? <p>{contact.notes}</p> : null}
                    <div>
                        <Form action="edit">
                            <button type="submit">Edit</button>
                        </Form>

                        <Form
                            action="destroy"
                            method="post"
                            onSubmit={(event) => {
                                const response = confirm(
                                    "Please confirm you want to delete this record."
                                );
                                if (!response) {
                                    event.preventDefault();
                                }
                            }}
                        >
                            <button type="submit">Delete</button>
                        </Form>
                    </div>
                </div>
            </div>
            <Outlet />
        </>
    );
}

const Favorite: FunctionComponent<{
    contact: Pick<ContactRecord, "favorite">;
}> = ({ contact }) => {
    const fetcher = useFetcher();
    const favorite = fetcher.formData
        ? fetcher.formData.get("favorite") === "true"
        : contact.favorite;
    return (
        <fetcher.Form method="post">
            <button
                aria-label={favorite ? "Unfavorite" : "add to favorite"}
                name="favorite"
                value={favorite ? "false" : "true"}
            >
                {favorite ? "*" : "☆"}
            </button>
        </fetcher.Form>
    );
};
