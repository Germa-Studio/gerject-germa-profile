import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
    return (
        <div className="navbar bg-base-100 fixed top-0 z-50 text-base-content">
            <div className="flex-1">
                <Link
                    className="btn btn-ghost normal-case text-xl h-auto"
                    href={"/"}>
                    <Image
                        src="/assets/logo.svg"
                        width={60}
                        height={60}
                        alt="logo"
                    />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li tabIndex={0}>
                        <a>
                            Tech Stacks
                            <svg
                                className="fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                            </svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li>
                                <a>Submenu 1</a>
                            </li>
                            <li>
                                <a>Submenu 2</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Harga</a>
                    </li>
                    <li>
                        <Link
                            href={"/about"}
                            className={
                                useRouter().pathname == "/about" ? "active" : ""
                            }>
                            Tentang Kami
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
