import { NavLink } from "@remix-run/react";
import { Button } from "../ui/button";
interface HeaderProps {
    navActive: string;
    isDark: boolean;
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ navActive, isDark, toggleTheme }) => {
    return (
        <header className="flex items-center justify-around">
            <div className="flex items-center gap-4">
                {/* <img src="/logo-light.png" alt="Remix" className="h-8 w-8" /> */}
                {/* <span className="text-2xl font-bold">Remix</span> */}
                <Button variant="ghost" size="icon" onClick={toggleTheme} className="relative w-10 h-10 rounded-full bg-transparent hover:bg-transparent shadow-transparent hover:shadow-transparent z-50">
                    <div className={`absolute inset-0 transform transition-all duration-700 ease-in-out flex items-center justify-center ${isDark ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'}`}>
                        <svg className="w-12 h-12 text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
                        </svg>
                    </div>
                    <div className={`absolute inset-0 transform transition-all duration-700 ease-in-out flex items-center justify-center ${isDark ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'}`}>
                        <svg className="w-12 h-12 text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>
                        </svg>
                    </div>
                </Button>
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
                        <NavLink key={text} to={href} className={`text-gray-800 dark:text-gray-100 active:shadow-xl ${navActive === href ? 'text-yellow-500' : ''}`}>
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

export default Header;