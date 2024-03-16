"use client"
import React, { useState, useEffect } from "react";
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const Navbar = () => {
    const closeNavbar = () => {
        setIsClick(false);
    };

    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = () => {
        setIsClick(!isClick);
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: "smooth"
            });
        }
    }

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            if (scrollTop > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        handleResize(); 
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <nav className={`bg-${isMobile ? '[#121212]' : ''} fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'backdrop-blur-lg border-b border-black' : ''}`}>
                <div className="flex container mx-auto px-4 sm:px-6 lg:px-8 ">
                    <div className="flex items-center justify-between h-16 w-full">
                        <div className="flex-shrink-0">
                            <a href="/" className="md:text-2xl text-white font-semibold">
                                Vinícius Rodrigues
                            </a>
                        </div>
                        <div className={`hidden md:block flex-grow ${isMobile ? 'hidden' : ''}`}>
                            <div className="ml-4 flex items-center space-x-4 justify-end">
                                <button 
                                    onClick={() => scrollToSection('home')}
                                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Home
                                </button>
                                <button 
                                    onClick={() => scrollToSection('about')}
                                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    About
                                </button>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Projects
                                </button>
                                <button 
                                    onClick={() => scrollToSection('contact')}
                                    className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                                >
                                    Contact
                                </button>
                            </div>
                        </div>
                        <div className="md:hidden flex items-center">
                            <button
                                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" onClick={toggleNavbar}
                                >
                                    {isClick ? (
                                        <svg
                                            className="h-6 w-6" 
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor" 
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg  
                                            className="h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M4 6h16M4 12h16m-7 6h7"
                                            />
                                        </svg>
                                    )}
                            </button>
                        </div>
                    </div>
                </div>
                {isClick && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 spacee-y-1 sm:px-3">
                            <a 
                                onClick={() => {scrollToSection('home'); closeNavbar();}}
                                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Home
                            </a>
                            <a 
                                onClick={() => {scrollToSection('about'); closeNavbar();}}
                                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                About
                            </a>
                            <a 
                                onClick={() => {scrollToSection('projects'); closeNavbar();}}
                                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Projects
                            </a>
                            <a 
                                onClick={() => {scrollToSection('contact'); closeNavbar();}}
                                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
