"use client";

import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <Link
            href="/"
            className="text-xl md:text-2xl text-gray-200 font-semibold tracking-tight"
          >
            Alzaf<span className="text-gray-400">Store</span>
          </Link>
          <p className="text-sm text-gray-500">
            Discover amazing deals on electronics, appliances, and more.
          </p>

          <div className="flex gap-3 text-gray-500">
            <a
              href="#"
              className="hover:text-blue-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>
              <Link href="/" className="hover:text-gray-900 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-gray-900 transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-900 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-900 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-gray-600 text-sm">
            <li>
              <Link href="/faq" className="hover:text-gray-900 transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-gray-900 transition">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-gray-900 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-gray-900 transition">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-gray-900 font-semibold mb-2">Newsletter</h3>
          <p className="text-gray-500 text-sm">
            Subscribe for latest offers and updates
          </p>
          <form className="flex gap-2 mt-2 flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 text-gray-800"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-4 py-2 rounded font-medium hover:bg-gray-800 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} AlzafStore. All rights reserved.
      </div>
    </footer>
  );
}
