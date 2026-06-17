"use client";

import { useEffect, useState } from "react";
import { DropdownIcon, GlobeIcon } from "./icons";

type LangCode = "en" | "zh-CN" | "ko";

const LANGUAGES: { code: LangCode; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh-CN", label: "中文", short: "中" },
  { code: "ko", label: "한국어", short: "한" },
];

function readActiveLang(): LangCode {
  if (typeof document === "undefined") return "en";
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/([^;]+)/);
  const code = match ? match[1] : "en";
  return (LANGUAGES.find((l) => l.code === code)?.code ?? "en") as LangCode;
}

function setLang(code: LangCode) {
  if (typeof document === "undefined") return;
  // Clear existing cookies on every host scope Google Translate might check.
  const host = window.location.hostname;
  const domains = ["", host, "." + host.replace(/^www\./, "")];
  for (const domain of domains) {
    const dom = domain ? `; domain=${domain}` : "";
    document.cookie = `googtrans=; path=/${dom}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
  if (code !== "en") {
    for (const domain of domains) {
      const dom = domain ? `; domain=${domain}` : "";
      document.cookie = `googtrans=/en/${code}; path=/${dom}`;
    }
  }
  window.location.reload();
}

export default function LanguageSwitcher({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  const [active, setActive] = useState<LangCode>("en");

  useEffect(() => {
    setActive(readActiveLang());
  }, []);

  const activeLang = LANGUAGES.find((l) => l.code === active) ?? LANGUAGES[0];

  if (variant === "mobile") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            className="language-option"
            onClick={() => setLang(lang.code)}
            data-active={active === lang.code}
          >
            {lang.short}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="nav-hover-group group relative">
      <button
        type="button"
        className="language-trigger"
        aria-label="Select language"
        aria-haspopup="menu"
      >
        <GlobeIcon className="size-5" aria-hidden />
        {activeLang.short}
        <DropdownIcon
          className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden
        />
      </button>
      <div className="language-dropdown" role="menu">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            type="button"
            className="language-option"
            onClick={() => setLang(lang.code)}
            data-active={active === lang.code}
          >
            {lang.label}
          </button>
        ))}
      </div>
    </div>
  );
}
