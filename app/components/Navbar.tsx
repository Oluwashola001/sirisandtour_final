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
        
          {/* LOGO - Added notranslate to prevent logo duplication/corruption */}

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
<div className="hidden md:block">
 
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

          <div className="flex items-center gap-3 md:hidden -mt-2   -mr-2">
           
      

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
           
            <button
              className="absolute right-5 top-8 text-4xl text-black"
              onClick={() => setMobileOpen(false)}
            >
              <HiOutlineX />
            </button>

            <div className="flex justify-start pl-0 -ml-5 -mt-9">
              <Image src="/logo.webp" alt="Siri Sand Tour Logo" width={190} height={80} />
            </div>

            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
              }}
              className="-mt-17 flex flex-col items-start pl-5 gap-6"
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

      {/* HIDDEN GOOGLE TRANSLATE ELEMENT - Wrapped in skiptranslate to be extra safe */}
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