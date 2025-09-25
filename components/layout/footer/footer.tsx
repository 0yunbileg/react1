"use client";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#493628] text-[#fffbe9] py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold mb-4">Sweet Crust Bakery</h3>
          <p className="text-sm">
            Baking with love and tradition. Fresh breads, pastries, and sweets
            delivered to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="!no-underline !text-[#fffbe9] !hover:text-[#ab886d] transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="!no-underline !text-[#fffbe9] !hover:text-[#ab886d] transition"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="!no-underline !text-[#fffbe9] !hover:text-[#ab886d] transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="!no-underline !text-[#fffbe9] !hover:text-[#ab886d] transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p className="text-sm mb-2">Email: hello@sweetcrust.com</p>
          <p className="text-sm mb-4">Phone: +1 234 567 890</p>
          <div className="flex gap-4 text-[#ab886d]">
            <a href="#" target="_blank" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" target="_blank" className="hover:text-white transition">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-8 border-t border-[#ab886d]/50 pt-4">
        &copy; {new Date().getFullYear()} Sweet Crust Bakery. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
