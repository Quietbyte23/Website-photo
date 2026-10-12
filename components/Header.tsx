"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/lib/i18n";

export default function Header() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const labels = t[lang];

  const isActive = (path: string) => pathname === path;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        backgroundColor: "rgba(245, 245, 247, 0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: "1px solid #d2d2d7",
      }}
    >
      <div
        style={{
          maxWidth: "1024px",
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1
            style={{
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "1.5px",
              margin: 0,
            }}
          >
            AXL{" "}
            <span style={{ color: "#86868b", fontWeight: 400 }}>
              VISUAL STUDIO
            </span>
          </h1>
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontSize: "12px",
            fontWeight: 500,
          }}
        >
          <Link
            href="/"
            style={{
              color: isActive("/") ? "#1d1d1f" : "#515154",
              textDecoration: "none",
              borderBottom: isActive("/")
                ? "1.5px solid #1d1d1f"
                : "1.5px solid transparent",
              paddingBottom: "2px",
            }}
          >
            {labels.portfolio}
          </Link>
          <Link
            href="/prices"
            style={{
              color: isActive("/prices") ? "#1d1d1f" : "#515154",
              textDecoration: "none",
              borderBottom: isActive("/prices")
                ? "1.5px solid #1d1d1f"
                : "1.5px solid transparent",
              paddingBottom: "2px",
            }}
          >
            {labels.services}
          </Link>
          <Link
            href="/contact"
            style={{
              color: isActive("/contact") ? "#1d1d1f" : "#515154",
              textDecoration: "none",
              borderBottom: isActive("/contact")
                ? "1.5px solid #1d1d1f"
                : "1.5px solid transparent",
              paddingBottom: "2px",
            }}
          >
            {labels.contact}
          </Link>

          <div
            style={{
              display: "flex",
              gap: "6px",
              borderLeft: "1px solid #d2d2d7",
              paddingLeft: "16px",
              fontFamily: "monospace",
              fontSize: "12px",
            }}
          >
            <button
              type="button"
              onClick={() => setLang("RO")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: lang === "RO" ? 700 : 400,
                color: lang === "RO" ? "#0066cc" : "#86868b",
                padding: 0,
                fontFamily: "monospace",
              }}
            >
              RO
            </button>
            <button
              type="button"
              onClick={() => setLang("ENG")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontWeight: lang === "ENG" ? 700 : 400,
                color: lang === "ENG" ? "#0066cc" : "#86868b",
                padding: 0,
                fontFamily: "monospace",
              }}
            >
              ENG
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
