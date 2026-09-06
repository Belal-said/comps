import Link from "./Link";
import { useState } from "react";
import Button from "./Button";

function Sidebar({token}) {
    const [active, setActive] = useState(false);

    const links = [
        { label: "Login", path: "/login" },
        { label: "Dropdown", path: "/" },
        { label: "Accordion", path: "/accordion" },
        { label: "Buttons", path: "/buttons" },
        { label: "Modal", path: "/modal" },
        { label: "Table", path: "/table" },
    ];

    const renderedLinks = links.map((link) => {
        return (
            <div key={link.label}>
                <Link
                    to={link.path}
                    className={`${token && link.path === '/login' ? "hidden" : ''} mb-3`}
                    activeClassName="font-bold border-l-4 pl-2"
                >
                    {link.label}
                </Link>
            </div>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default Sidebar;
