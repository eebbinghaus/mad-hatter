import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <Link className="" aria-current="page" to="/">
                Logo Placeholder
            </Link>
            <ul className="flex justify-end">
                <li>
                    <Link className={"mr-8"} aria-current="page" to="/sale">
                        Sale
                    </Link>
                </li>
                <li>
                    <Link className={"mr-8"} aria-current="page" to="/contact">
                        Contact Us
                    </Link>
                </li>
                <li>
                    <Link className={"mr-8"} aria-current="page" to="/account">
                        My Account
                    </Link>
                </li>
                <li>
                    <Link className={"mr-8"} aria-current="page" to="/cart">
                        Cart
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
