"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Script from "next/script";

const LANGUAGES = [
  { code: "en", label: "English", flag: "/images/flags/gb.webp" },
  { code: "ar", label: "Arabic", flag: "/images/flags/sa.webp" },
  { code: "ru", label: "Russian", flag: "/images/flags/ru.webp" },
  { code: "de", label: "German", flag: "/images/flags/de.webp" },
  { code: "es", label: "Spanish", flag: "/images/flags/es.webp" },
  { code: "pl", label: "Polish", flag: "/images/flags/pl.webp" },
  { code: "ro", label: "Romanian", flag: "/images/flags/ro.webp" },
  { code: "it", label: "Italian", flag: "/images/flags/it.webp" },
  { code: "cs", label: "Czech", flag: "/images/flags/cz.webp" },
  { code: "nl", label: "Belgian", flag: "/images/flags/be.webp" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(LANGUAGES[0]);
  const [visible, setVisible] = useState(true);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY <= 20) setVisible(true);
      else {
        setVisible(false);
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lang: any) => {
    setCurrent(lang);
    setOpen(false);

    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement | null;
    if (select) {
      select.value = lang.code;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <>
      <div id="google_translate_element" className="hidden" />

      <Script
        src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <Script id="google-translate-init" strategy="afterInteractive">
        {`
          function googleTranslateElementInit() {
            if (window.google && window.google.translate && !window.__gt_initialized) {
              window.__gt_initialized = true;
              new window.google.translate.TranslateElement(
                { pageLanguage: 'en', autoDisplay: false },
                'google_translate_element'
              );
            }
          }
        `}
      </Script>

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed z-50 right-18 top-10 lg:right-45 lg:top-8"
          >
            <button
              onClick={() => setOpen(!open)}
              className="
                flex items-center gap-2 
                bg-white border shadow text-black rounded
                px-2 py-1 text-sm  
                lg:px-3 lg:py-2 lg:text-base
              "
            >
              <Image
                src={current.flag}
                alt=""
                width={18}
                height={12}
                className="lg:w-[20px] lg:h-[14px]"
              />
              <span className="font-semibold uppercase">{current.code}</span>
              <svg
                className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-200 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                stroke="black"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute right-0 mt-2 bg-white border rounded shadow w-48 lg:w-56 text-black"
                >
                  {LANGUAGES.map((lang) => (
                    <div
                      key={lang.code}
                      onClick={() => changeLanguage(lang)}
                      className="flex items-center gap-3 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      <Image src={lang.flag} alt="" width={20} height={14} />
                      <span className="text-base lg:text-lg font-medium">{lang.label}</span>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
