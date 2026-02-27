"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Tours", href: "/ourtrip" },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const languages = [
  { name: "English", flag: "🇬🇧" },
  { name: "Arabic", flag: "🇪🇬" },
  { name: "Russian", flag: "🇷🇺" },
  { name: "German", flag: "🇩🇪" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "Polish", flag: "🇵🇱" },
  { name: "Romanian", flag: "🇷🇴" },
  { name: "Italian", flag: "🇮🇹" },
  { name: "Czech", flag: "🇨🇿" },
  { name: "Belgian", flag: "🇧🇪" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [shadowVisible, setShadowVisible] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const pathname = usePathname();

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => setShowNav(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open/close mobile menu
  useEffect(() => {
    if (mobileOpen) {
      setShadowVisible(true);
      const menuTimer = setTimeout(() => setMenuVisible(true), 300);
      return () => clearTimeout(menuTimer);
    } else {
      setMenuVisible(false);
      const shadowTimer = setTimeout(() => setShadowVisible(false), 400);
      return () => clearTimeout(shadowTimer);
    }
  }, [mobileOpen]);

  // Function to trigger Google Translate
const translatePage = (lang: string) => {
  const langMap: { [key: string]: string } = {
    English: "en",
    Arabic: "ar",
    Russian: "ru",
    German: "de",
    Spanish: "es",
    Polish: "pl",
    Romanian: "ro",
    Italian: "it",
    Czech: "cs",
    Belgian: "be",
  };

  const code = langMap[lang];
  const select = document.querySelector(
    ".goog-te-combo"
  ) as HTMLSelectElement;

  if (select) {
    select.value = code;
    select.dispatchEvent(new Event("change"));
  }
};
  if (!showNav) return null;

  return (
    <div className="relative overflow-x-hidden">
      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 bg-transparent overflow-x-hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 -ml-13 lg:ml-5 -mt-22 pb-3 lg:-mt-27 md:py-4 lg:-mt-10">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.webp"
              alt="Siri Sand Tour Logo"
              width={290}
              height={100}
              priority
            />
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6 -ml-12">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

            {/* LANGUAGE DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 px-3 py-2 border rounded-md text-[#0A7BBE] hover:text-[#075E94] font-semibold"
              >
                {selectedLanguage}
                <svg
                  className={`w-4 h-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-46 grid lg:grid-cols-2 bg-white shadow-lg rounded-md border z-50">
                 {languages.map((lang) => (
                    <li
                      key={lang.name}
                      onClick={() => {
                        setSelectedLanguage(lang.name);
                        setDropdownOpen(false);
                        translatePage(lang.name);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-[#0A7BBE] font-medium"
                    >
                      {lang.flag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* BOOK NOW BUTTON */}
          <div className="hidden md:flex">
            <Link href="/booknow">
              <button className="relative overflow-hidden px-6 py-3 rounded-full bg-[#0A7BBE] text-white text-base font-semibold group">
                <span className="absolute inset-0 bg-[#075E94] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">Book Now</span>
              </button>
            </Link>
          </div>

        <div className="flex items-center gap-3 md:hidden">
  
  {/* MOBILE LANGUAGE BUTTON */}
  <div className="relative">
    <button
      onClick={() => setDropdownOpen(!dropdownOpen)}
      className="flex items-center gap-1 px-2 py-1 border rounded-md text-black font-semibold text-sm"
    >
      🌍 {selectedLanguage}
    </button>

    {dropdownOpen && (
      <ul className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-md border z-50">
        {languages.map((lang) => (
          <li
            key={lang.name}
            onClick={() => {
              setSelectedLanguage(lang.name);
              setDropdownOpen(false);
              translatePage(lang.name);
            }}
            className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-black text-sm"
          >
            {lang.flag}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* HAMBURGER */}
  <button
    className="text-4xl text-black"
    onClick={() => setMobileOpen(true)}
  >
    <HiOutlineMenu />
  </button>
</div>
        </div>
      </motion.nav>

      {/* MOBILE SHADOW */}
      <AnimatePresence>
        {shadowVisible && (
          <motion.div
            key="shadow"
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuVisible && (
          <motion.aside
            key="menu"
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            exit={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 220, damping: 28 }}
            className="fixed left-0 top-0 z-50 h-full w-[92%] bg-white shadow-2xl overflow-x-hidden"
          >
            {/* CLOSE BUTTON */}
            <button
              className="absolute right-5 top-8 text-4xl text-black"
              onClick={() => setMobileOpen(false)}
            >
              <HiOutlineX />
            </button>

            {/* LOGO */}
            <div className="flex justify-start pl-0 -ml-5 -mt-9">
              <Image src="/logo.webp" alt="Siri Sand Tour Logo" width={190} height={80} />
            </div>

            {/* MOBILE LINKS */}
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
              }}
              className="-mt-13 flex flex-col items-start pl-5 gap-6"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                >
                  <Link href={link.href} onClick={() => setMobileOpen(false)} className="text-xl font-medium text-black hover:text-[#0A7BBE]">
                    {link.label}
                  </Link>
                </motion.div>
              ))}

            
                
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* HIDDEN GOOGLE TRANSLATE ELEMENT */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}

/* NAV LINK COMPONENT */
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link
      href={href}
      className={`
        group relative text-lg font-semibold px-3 transition
        ${isHome ? "text-white" : "text-[#0a7bbe]"}
        hover:text-[#075E94]
      `}
    >
      {children}
      <span
        className={`
          absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300
          ${isHome ? "bg-white" : "bg-[#0a7bbe]"}
          group-hover:w-full
        `}
      />
    </Link>
  );
}