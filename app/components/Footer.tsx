"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaYoutube,
  FaSnapchatGhost,
} from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-14">

        {/* Brand */}
        <div>
          {/* Bigger Footer Logo to match Header + Brand Name */}
          <div className="flex items-center mb-6">
            <Link href="/" className="flex-shrink-0 flex items-center gap-4">
              <Image
                src="/logo.svg"
                alt="Koky · Hurghada trips"
                width={400}
                height={150}
                className="h-24 md:h-32 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <span 
                  className="text-4xl font-extrabold text-[#0A7BBE] leading-none tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Koky
                </span>
                <span className="text-xs font-bold text-[#0A7BBE] uppercase tracking-[0.25em] mt-1">
                  Hurghada trips
                </span>
              </div>
            </Link>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">
        <span className="font-bold text-gray-900 tracking-wide">Koky</span>
        <strong className="mx-1.5 text-lg font-black text-[#0A7BBE]">·</strong>
        <span className="font-bold text-gray-900 tracking-wide">Hurghada trips</span>
        <span className="mx-2 text-[#0A7BBE] font-bold">:</span>
        <span className="italic text-gray-500">
          From our ancient sands to our enchanting seas... your family is the hero of the story.
        </span>
      </p>

          {/* Social Icons */}
          <div className="flex gap-3 flex-wrap">
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/share/1GSg2bFn1Z/" },
              { Icon: FaYoutube, href: "https://youtube.com/@sirisandtours?si=sGpI_SpxQ8JeD2Rq" },
              { Icon: FaTiktok, href: "https://www.tiktok.com/@siri.sand.tours?_r=1&_t=ZS-93QFhoDBpmm" },
              { Icon: FaSnapchatGhost, href: "https://www.snapchat.com/add/sirisandtours?share_id=0WLExyAYoi8&locale=ar-EG" },
              {
                Icon: FaWhatsapp,
                href: "https://wa.me/201288062555?text=Hello%20I%20want%20to%20book%20a%20tour"
              },
              { Icon: FaInstagram, href: "https://www.instagram.com/sirisandtours?igsh=emltNHVlejE4ZnBl" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                  bg-[#EEF7FB] text-[#0A7BBE]
                  hover:bg-[#0A7BBE] hover:text-white transition"
              >
                <item.Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Quick Links
          </h3>
          <ul className="space-y-4 text-gray-600">
            {[
              { name: "Home", href: "/" },
              { name: "Our Trips", href: "/ourtrip" },
              { name: "Blog", href: "/blogs" },
              { name: "About Us", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 hover:text-[#0A7BBE] transition"
                >
                  <span className="text-xl">›</span>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-6 text-gray-900">
            Get In Touch
          </h3>

          <ul className="space-y-6 text-gray-600">
            <li className="flex items-center gap-4">
              <span className="w-11 h-11 flex-shrink-0 rounded-full bg-[#EEF7FB] flex items-center justify-center text-[#0A7BBE]">
                <FaPhoneAlt />
              </span>
              <div className="flex flex-col">
                <span>+20 128 8062555</span>
                <span>+20 111 1612808</span>
              </div>
            </li>

            <li className="flex items-center gap-4">
              <span className="w-11 h-11 flex-shrink-0 rounded-full bg-[#EEF7FB] flex items-center justify-center text-[#0A7BBE]">
                <FaEnvelope />
              </span>
              sirisandtours@gmail.com
            </li>

            <li className="flex items-center gap-4">
              <span className="w-11 h-11 flex-shrink-0 rounded-full bg-[#EEF7FB] flex items-center justify-center text-[#0A7BBE]">
                <FaMapMarkerAlt />
              </span>
              Hurghada_Red Sea_Egypt
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t pt-6 text-center text-sm text-gray-400">
        <span suppressHydrationWarning>© {new Date().getFullYear()} Koky · Hurghada trips. All rights reserved.</span>
      </div>
    </footer>
  );
}