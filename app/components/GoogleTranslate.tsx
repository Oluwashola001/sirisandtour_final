"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // 1. Initialize the Google Translate Element
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
          includedLanguages: "en,ar,ru,de,es,pl,ro,it,cs,be",
        },
        "google_translate_element"
      );
    };

    // 2. Load the Google Translate Script
    if (!document.querySelector('script[src*="translate_a/element.js"]')) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }

    // 3. Inject Ultra-Aggressive CSS
    const style = document.createElement("style");
    style.innerHTML = `
      /* Hide the translation banner, tooltips, and frames */
      .goog-te-banner-frame,
      .goog-te-banner-frame.skiptranslate,
      .goog-te-gadget-simple,
      .goog-te-menu-value,
      .goog-tooltip,
      .goog-tooltip:hover,
      .goog-text-highlight,
      #goog-gt-tt,
      .goog-te-balloon-frame,
      iframe.goog-te-banner-frame,
      iframe.skiptranslate {
        display: none !important;
        visibility: hidden !important;
      }

      /* Force the page back to the top (prevents the white gap) */
      body, html {
        top: 0px !important;
        position: static !important;
      }

      /* Removes the "Translated to..." popup on hover */
      #goog-gt- {
        display: none !important;
      }
      
      .skiptranslate {
        display: none !important;
      }
    `;
    document.head.appendChild(style);

    // 4. Advanced Observer to fight Google's automatic layout shifting
    const fixLayout = () => {
      // Google Translate often targets both html and body styles
      if (document.body.style.top !== "0px") document.body.style.top = "0px";
      if (document.documentElement.style.top !== "0px") document.documentElement.style.top = "0px";
      
      // Look for the specific iframe and remove it from the DOM entirely if it appears
      const banner = document.querySelector(".goog-te-banner-frame") as HTMLElement;
      if (banner) {
        banner.remove(); 
      }
    };

    const observer = new MutationObserver(fixLayout);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["style"] });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    const interval = setInterval(fixLayout, 200);

    return () => {
      observer.disconnect();
      clearInterval(interval);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return <div id="google_translate_element" style={{ display: "none" }} />;
}