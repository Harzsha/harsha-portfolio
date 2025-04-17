import { useState } from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const scrollTo = (id) => {
        const section = document.getElementById(id);
        section?.scrollIntoView({ behavior: "smooth" });
        setMobileMenuOpen(false);
    };

    return (
        <header className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
            <nav className="flex items-center justify-between p-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1 items-center gap-2">
                    <img
                        className="h-8 w-auto  rounded-full"
                        src="/harsha-logo.jpeg"
                        alt="logo"
                    />
                    <span className="font-semibold text-lg">Harshavardhan P</span>
                </div>

                {/* Hamburger Icon */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(true)}
                        className="inline-flex items-center justify-center p-2 text-gray-700"
                    >
                        <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6h18M3 12h18M3 18h18" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {["home", "about", "resume", "contact"].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollTo(item)}
                            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </button>
                    ))}
                </div>
            </nav>

            {/* Mobile Nav */}
            {mobileMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40 bg-white px-6 py-6">
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold">Harshavardhan P</span>
                        <button onClick={() => setMobileMenuOpen(false)} className="text-gray-700">
                            <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flex flex-col gap-y-4">
                        {["home", "about", "resume", "contact"].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item)}
                                className="text-base font-semibold text-gray-900 hover:text-indigo-600"
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
