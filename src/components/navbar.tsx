import { useState } from "react";
import Link from 'next/link';

export default function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNavBar = () => {
        console.log(!navbarOpen)
        setNavbarOpen(!navbarOpen)
    }
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className="container mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link href="/">
                            <img
                                src={'/logo.png'}
                                alt="home"
                                className="logo"
                                height="80"
                                width="250"
                            />
                        </Link>
                        <button
                            className="text-white cursor-pointer text-xl self-center leading-none px-3 py-1 pr-0 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={handleNavBar}
                        >
                            <svg className={`h-8 w-8 text-gray-900`} fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center justify-end" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                    >
                        <ul className={"flex flex-col lg:flex-row list-none lg:ml-auto "}>
                            <li className="nav-item">
                                <Link href={'/'}
                                    className={`px-4 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75 hover:cursor-pointer text-gray-800`}
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span
                                    className={`text-gray-800 ml-2`}>GALERIJ</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href={'/tattoos'}
                                    className={`px-4 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75 hover:cursor-pointer text-gray-800`}
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span
                                    className={`text-gray-800 ml-2`}>Tattoos</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link href={'/over-mij'}
                                    className={`px-4 pr-0 py-2 flex items-center text-xs uppercase leading-snug hover:opacity-75 hover:cursor-pointer text-gray-800`}
                                >
                                    <i className="text-lg leading-lg opacity-75"></i><span
                                    className={`text-gray-800 ml-2`}>OVER MIJ</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
