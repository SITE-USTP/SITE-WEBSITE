import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'Events', href: '/events' },
        { name: 'Officers', href: '/officers' },
        { name: 'Resources', href: '/resources' },
    ];

    return (
        <nav class="bg-[var(--color-dark-surface)] border-b border-white/10 sticky top-0 z-50 backdrop-blur-md bg-opacity-80">
            <div class="container mx-auto px-4">
                <div class="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div class="flex-shrink-0 flex items-center">
                        <a href="/" class="text-2xl font-bold font-mono text-[var(--color-primary)] tracking-tighter">
                            &lt;SITE /&gt;
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div class="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                class="text-gray-300 hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors font-mono"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div class="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span class="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div class="md:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--color-dark-surface)] border-b border-white/10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                class="text-gray-300 hover:text-[var(--color-primary)] block px-3 py-2 rounded-md text-base font-medium font-mono"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
