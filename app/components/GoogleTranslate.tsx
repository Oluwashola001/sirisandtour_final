"use client";
import { useState } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Spanish" },
  { code: "fr", label: "French" },
  { code: "de", label: "German" },
  { code: "ar", label: "Arabic" },
];

export default function TranslateDropdown() {
  const [selected, setSelected] = useState("en");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setSelected(lang);

    // Redirect page to Google Translate version of your site
    const url = encodeURIComponent(window.location.href);
    if (lang === "en") {
      window.location.href = window.location.href; // reset to default
    } else {
      window.location.href = `https://translate.google.com/translate?sl=en&tl=${lang}&u=${url}`;
    }
  };

  return (
  <div className="fixed top-8 right-45 z-[9999] bg-white border border-gray-300 rounded p-2 shadow-md">
  <select
    value={selected}
    onChange={handleChange}
    className="bg-white outline-none text-black"
  >
    {LANGUAGES.map((lang) => (
      <option key={lang.code} value={lang.code} className="text-black">
        {lang.label}
      </option>
    ))}
  </select>
</div>
  );
}