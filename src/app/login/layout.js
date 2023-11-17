"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Layout({ children }) {
    const pathname = usePathname();
    console.log(pathname, "pathname");

    return (
        <div className="main-container">
            {pathname !== "/login/loginteacher" ? (
                <ul className="nav-ul-element">
                    <li>
                        <Link className="li-item" href="/login">
                            Login
                        </Link>
                    </li>
                    <li>
                        <Link className="li-item" href="/login/loginstudent">
                            Login Student
                        </Link>
                    </li>
                    <li>
                        <Link className="li-item" href="/login/loginteacher">
                            Login Teacher
                        </Link>
                    </li>
                </ul>
            ) : null}
            {children}
        </div>
    );
}
