"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-green-700">
            Amma Agro Agencies
          </span>
        </Link>

        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/" className="text-sm font-medium hover:text-green-700">
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium hover:text-green-700"
          >
            Products
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-green-700"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-green-700"
          >
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex md:items-center md:gap-4">
          <Button variant="default" className="bg-green-700 hover:bg-green-800">
            Get in Touch
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="container mx-auto md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <Link
              href="/"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium hover:text-green-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="mt-2 w-full bg-green-700 hover:bg-green-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Get in Touch
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
