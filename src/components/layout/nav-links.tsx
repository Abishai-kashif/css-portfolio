import Link from "next/link";

const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact-us" },
];
const NavLinks = () => {
    return (
        <nav>
            <ul>
                {links.map((link) => (
                    <li key={link.path}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavLinks;
