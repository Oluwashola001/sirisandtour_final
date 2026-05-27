"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Script from "next/script";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Our Tours", href: "/ourtrip" },
  { label: "Blog", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [shadowVisible, setShadowVisible] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setShowNav(window.scrollY === 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  if (!showNav) return null;

  return (
    <div className="relative overflow-x-hidden">
      {/* DESKTOP NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="notranslate fixed inset-x-0 top-0 z-50 bg-transparent overflow-x-hidden"
        translate="no"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 -ml-17 lg:ml-5 -mt-22 pb-3 lg:-mt-27 md:py-4 lg:-mt-10">
          <Link href="/" className="flex items-center notranslate lg:mt-1 mt-3">
            <Image
              src="/logo.webp"
              alt="Siri Sand Tour Logo"
              width={275}
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
            <div className="hidden md:block" />
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

          <div className="flex items-center gap-3 md:hidden -mt-2 -mr-2">
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
            <button
              className="absolute right-0 top-9 text-4xl text-black"
              onClick={() => setMobileOpen(false)}
            >
              <HiOutlineX />
            </button>

            <div className="flex justify-start pl-0 -ml-5 -mt-9">
              <Image src="/logo.webp" alt="Siri Sand Tour Logo" width={190} height={80} />
            </div>

            {/* MOBILE NAV LINKS — restyled */}
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
              }}
              className="mt-6 flex flex-col items-start pl-6 gap-1"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
                    visible: {
                      clipPath: "inset(0 0 0% 0)",
                      opacity: 1,
                      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="w-full border-b border-gray-100 py-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="group flex items-baseline gap-3"
                  >
                  
                    <span
                      className="text-[2rem] font-semibold leading-tight tracking-tight text-gray-900 transition-colors duration-200 group-hover:text-[#0A7BBE]"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </motion.nav>
          </motion.aside>
        )}
      </AnimatePresence>

      <div id="google_translate_element" className="hidden skiptranslate" />

      <Script
        src="https://apps.elfsight.com/p/platform.js"
        strategy="afterInteractive"
      />
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <Link
      href={href}
      className={`
        notranslate group relative text-lg font-semibold px-3 transition
        ${isHome ? "text-white" : "text-[#0a7bbe]"}
        hover:text-[#075E94]
       translate="no"
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