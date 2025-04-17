import React from "react";

const Header = () => {
    return (
        <header className="fixed w-full top-0 z-50 bg-white shadow-md">
            <nav className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center space-x-3">
                    <img
                        className="h-8 w-auto"
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Logo"
                    />
                    <span className="font-bold text-lg">Harshavardhan P</span>
                    <span className="text-sm text-gray-600">Full Stack Developer</span>
                </div>
                <ul className="hidden md:flex gap-8 font-semibold text-gray-800">
                    <li className="hover:text-indigo-600 cursor-pointer">Home</li>
                    <li className="hover:text-indigo-600 cursor-pointer">About</li>
                    <li className="hover:text-indigo-600 cursor-pointer">Resume</li>
                    <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
