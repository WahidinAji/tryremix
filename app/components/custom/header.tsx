import { NavLink, useNavigate } from "@remix-run/react";
import { useState } from "react";

export default function Header({navActive}: {navActive: String}) {
    return (
        <header className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <img src="/logo-light.png" alt="Remix" className="h-8 w-8" />
                <span className="text-2xl font-bold">Remix</span>
            </div>
            <div className="flex items-center gap-4">
                {/* <a href="#" className={`text-gray-800 dark:text-gray-100 active:shadow-xl ${isActive === NavItem.Docs ? 'text-yellow-500' : ''}`} onClick={() => handleClick(NavItem.Docs)}>
                    Home
                </a>
                <a href="#" className={`text-gray-800 dark:text-gray-100 active:shadow-xl ${isActive === NavItem.Docs ? 'text-yellow-500' : ''}`} onClick={() => handleClick(NavItem.Docs)}>
                    Blog
                </a>
                <a href="#" className={`text-gray-800 dark:text-gray-100 active:shadow-xl ${isActive === NavItem.Docs ? 'text-yellow-500' : ''}`} onClick={() => handleClick(NavItem.Docs)}>
                    Pricing
                </a> */}
                {
                    resources.map(({ href, text }) => (
                        // <a href={href} className={`text-gray-800 dark:text-gray-100 active:shadow-xl ${isActive === NavItem.Docs ? 'text-yellow-500' : ''}`} onClick={() => handleClick(NavItem.Docs)}>
                        //     {text}
                        // </a>
                        <NavLink key={text} to={href} className={`text-gray-800 dark:text-gray-100 active:shadow-xl ${ navActive === href ? 'text-yellow-500' : ''}`}>
                            {text}
                        </NavLink>
                    ))
                }
            </div>
        </header>
    );
}

const resources = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "/about",
        text: "About",
    },
    {
        href: "/blog",
        text: "Blog",
    },
    {
        href: "/pricing",
        text: "Pricing",
    }
];