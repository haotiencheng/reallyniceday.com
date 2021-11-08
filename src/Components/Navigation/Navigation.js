import React from "react";
import { useState } from "react";
import logo from "./logo.png";
import "./Navigation.css";

function Navigation() {
    const [isToggled, setIsToggled] = useState(false);
    const [showHideSidenav, setShowHideSidenav] = useState("invisible");
    const [mobile_menu_css, setmobile_menu_css] = useState(
        "mobile-menu absolute top-0 left-0 md:hidden h-screen w-screen flex flex-col items-center bg-white transform"
    );

    const initialCss =
        "bg-gray-200 mobile-menu absolute top-0 left-0 md:hidden h-screen w-screen flex flex-col items-center bg-white z-10 transform";
    const handleClick = () => {
        let isShow = isToggled ? "visible" : "invisible";
        let css = isToggled
            ? initialCss + " translate-x-0"
            : initialCss + " translate-x-full";
        setIsToggled(!isToggled);
        setShowHideSidenav(isShow);
        setmobile_menu_css(css);
    };

    return (
        <nav href="" className="bg-white fixed w-full z-10 border-b-2">
            <div className="max-w-8xl mx-4 sm:mx-8 md:mx-16 lg:mx-32 2xl:mx-48 flex flex-row bg-white">
                <div className="flex space-x-7">
                    <div className="z-10">
                        {/* <!-- Website Logo --> */}
                        <a href="#Home" className="flex items-center py-4">
                            <img
                                href="#Home"
                                src={logo}
                                alt="Logo"
                                className="h-8 md:h-10 2xl:h-16 mr-4 transform transition duration-700 hover:rotate-180"
                            />
                            <span
                                href="#Home"
                                className="font-semibold md:text-xl 2xl:text-2xl 2xl:ml-8 xl:ml-4 text-secondary hover:text-primary transition duration-300"
                            >
                                really_nice_day
                            </span>
                        </a>
                    </div>
                    {/* <!-- Primary Navbar items --> */}
                </div>
                <div className="hidden md:flex items-center space-x-5 justify-end ml-auto">
                    <a
                        href="#About"
                        className="py-4 px-2 2xl:text-xl text-secondary font-semibold hover:text-primary transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#Portfolio"
                        className="py-4 px-2 2xl:text-xl text-secondary font-semibold hover:text-primary transition duration-300"
                    >
                        Portfolio
                    </a>
                    <a
                        href="#Dance"
                        className="py-4 px-2 2xl:text-xl text-secondary font-semibold hover:text-primary transition duration-300"
                    >
                        Dance
                    </a>
                    <a
                        href="#Contact"
                        className="py-4 px-2 2xl:text-xl text-secondary font-semibold hover:text-primary transition duration-300"
                    >
                        Contact
                    </a>
                </div>
                {/* <!-- Mobile menu button --> */}
                <div className="md:hidden flex items-center ml-auto mr-4">
                    <button
                        onClick={() => handleClick()}
                        className="outline-none mobile-menu-button z-20"
                    >
                        <svg
                            className=" w-6 h-6 text-secondary hover:text-primary "
                            x-show="!showMenu"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {/* <!-- mobile menu --> */}
            <div className={showHideSidenav}>
                <div className={mobile_menu_css}>
                    <a
                        href="#About"
                        onClick={() => handleClick()}
                        className="flex text-2xl items-center text-secondary h-full hover:text-primary font-semibold transition duration-300"
                    >
                        About
                    </a>
                    <a
                        href="#Portfolio"
                        onClick={() => handleClick()}
                        className="flex text-2xl items-center text-secondary h-full hover:text-primary font-semibold transition duration-300"
                    >
                        Portfolio
                    </a>
                    <a
                        href="#Dance"
                        onClick={() => handleClick()}
                        className="flex text-2xl items-center text-secondary h-full hover:text-primary font-semibold transition duration-300"
                    >
                        Dance
                    </a>
                    <a
                        href="#Contact"
                        onClick={() => handleClick()}
                        className="flex text-2xl items-center text-secondary h-full hover:text-primary font-semibold transition duration-300"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
