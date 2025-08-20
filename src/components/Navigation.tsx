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
    { href: '#iletisim', label: 'İletişim' }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : "backdrop-blur-sm"
      } border-b`}
      style={{
        backgroundColor: isScrolled
          ? "rgba(66, 11, 32, 0.95)"
          : "rgba(66, 11, 32, 0.90)",
        borderBottomColor: "#D4AF37",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="#anasayfa"
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="Süreyya Alper"
              width={40}
              height={40}
              className="mx-auto rounded-full shadow-2xl border-1"
              style={{ borderColor: "#AB7B66" }}
            />
            <span
              className="ml-3 text-xl font-bold"
              style={{ color: "#F5DEB3" }}
            >
              Süreyya Alper
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors font-medium hover:opacity-80"
                style={{ color: "#D4AF37" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors hover:opacity-80"
            aria-label="Menüyü aç/kapat"
          >
            <div className="space-y-1.5">
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
                style={{ backgroundColor: "#D4AF37" }}
              ></div>
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
                style={{ backgroundColor: "#D4AF37" }}
              ></div>
              <div
                className={`w-6 h-0.5 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
                style={{ backgroundColor: "#D4AF37" }}
              ></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block px-4 py-2 rounded-lg transition-colors hover:opacity-80"
                style={{ color: "#D4AF37" }}
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
