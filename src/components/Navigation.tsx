'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const menuItems = [
        { href: '#anasayfa', label: 'Ana Sayfa' },
        { href: '#hakkinda', label: 'Hakkında' },
        { href: '#eserler', label: 'Eserler' },
        { href: '#iletisim', label: 'İletişim' },
    ];

    return (
        <nav
            className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
                isScrolled ? 'shadow-lg backdrop-blur-md' : 'backdrop-blur-sm'
            } border-b`}
            style={{
                backgroundColor: isScrolled ? 'rgba(66, 11, 32, 0.95)' : 'rgba(66, 11, 32, 0.90)',
                borderBottomColor: '#C4A447',
            }}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="#anasayfa" className="flex items-center" onClick={closeMenu}>
                        <Image
                            src="/logo.png"
                            alt="Süreyya Alper"
                            width={40}
                            height={40}
                            className="mx-auto rounded-full border-1 shadow-2xl"
                            style={{ borderColor: '#AB7B66' }}
                        />
                        <span
                            className="ml-3 bg-clip-text text-2xl font-bold text-transparent"
                            style={{
                                backgroundImage:
                                    'linear-gradient(45deg, #C4A447, #E8D5A8, #B8956F)',
                            }}
                        >
                            Süreyya Alper
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden space-x-8 md:flex">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="font-medium transition-colors hover:opacity-80"
                                style={{ color: '#C4A447' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:opacity-80 md:hidden"
                        aria-label="Menüyü aç/kapat"
                    >
                        <div className="space-y-1.5">
                            <div
                                className={`h-0.5 w-6 transition-all duration-300 ${
                                    isMenuOpen ? 'translate-y-2 rotate-45' : ''
                                }`}
                                style={{ backgroundColor: '#C4A447' }}
                            ></div>
                            <div
                                className={`h-0.5 w-6 transition-all duration-300 ${
                                    isMenuOpen ? 'opacity-0' : ''
                                }`}
                                style={{ backgroundColor: '#C4A447' }}
                            ></div>
                            <div
                                className={`h-0.5 w-6 transition-all duration-300 ${
                                    isMenuOpen ? '-translate-y-2 -rotate-45' : ''
                                }`}
                                style={{ backgroundColor: '#C4A447' }}
                            ></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`overflow-hidden transition-all duration-300 md:hidden ${
                        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="space-y-2 py-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={closeMenu}
                                className="block rounded-lg px-4 py-2 transition-colors hover:opacity-80"
                                style={{ color: '#C4A447' }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
