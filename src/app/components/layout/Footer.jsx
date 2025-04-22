import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-green-700">
              Amma Agro Agencies
            </h3>
            <p className="text-sm text-gray-600 max-w-xs">
              Your trusted partner in agriculture, providing quality seeds,
              pesticides, and fertilizers to help farmers thrive.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="text-gray-500 hover:text-green-700"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="text-gray-500 hover:text-green-700"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="text-gray-500 hover:text-green-700"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://whatsapp.com"
                aria-label="Whatsapp"
                className="text-gray-500 hover:text-green-700"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/products?category=seeds"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Seeds
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=pesticides"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Pesticides
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=fertilizers"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Fertilizers
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=tools"
                  className="text-sm text-gray-600 hover:text-green-700"
                >
                  Agricultural Tools
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-green-700 mt-0.5" />
                <span className="text-sm text-gray-600">
                  Ward 1, Rupanagudi road, Shankarabanda,
                  <br /> Ballari District, Karnataka - 583102
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-green-700" />
                <span className="text-sm text-gray-600">+91 9206662292</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-green-700" />
                <span className="text-sm text-gray-600">
                  reddykyogesh@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Amma Agro Agencies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
