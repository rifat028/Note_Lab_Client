import { Link } from "react-router";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
  FaFacebookMessenger,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-orange-100 border-t border-base-300/30 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Logo + About */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">NOTE LAB</h2>

          <p className="text-base-content/70 text-sm leading-relaxed max-w-60 text-justify">
            Note Lab is a digital platform providing high quality lecture
            sheets, notes and model questions for teachers, tutors and
            educational institutions across Bangladesh.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>

          <div className="flex md:flex-row flex-col gap-10">
            <ul className="space-y-2 text-base-content/70">
              <li>
                <Link to="/" className="hover:text-primary transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/packages" className="hover:text-primary transition">
                  Packages
                </Link>
              </li>

              <li>
                <Link to="/pricing" className="hover:text-primary transition">
                  Pricing
                </Link>
              </li>
            </ul>

            <ul className="space-y-2 text-base-content/70">
              <li>
                <Link to="/details" className="hover:text-primary transition">
                  Details
                </Link>
              </li>
              <li>
                <Link to="/tutorials" className="hover:text-primary transition">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link to="/join-us" className="hover:text-primary transition">
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>

          <ul className="space-y-2 text-base-content/70 text-sm">
            <li>Email: thenotelab001@gmail.com</li>
            <li>Phone: 01943730177</li>
            <li>Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Social Links</h3>

          <div className="flex gap-3 pt-2 ">
            <a
              className="btn btn-sm btn-circle bg-base-100 border-base-300 hover:bg-primary hover:text-white"
              href="https://www.facebook.com/NoteLabBD"
              target="_blank"
            >
              <FaFacebookF />
            </a>

            <a
              className="btn btn-sm btn-circle bg-base-100 border-base-300 hover:bg-blue-600 hover:text-white"
              href="https://m.me/115300131545728"
              target="_blank"
            >
              <FaFacebookMessenger />
            </a>

            <a
              className="btn btn-sm btn-circle bg-base-100 border-base-300 hover:bg-green-400 hover:text-white"
              href="https://wa.me/8801943730177"
              target="_blank"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 text-center text-sm text-base-content/60">
          © {new Date().getFullYear()} Note Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
