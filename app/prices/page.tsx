"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { PACKAGES, t } from "@/lib/i18n";

export default function PricesPage() {
  const { lang } = useLanguage();
  const labels = t[lang];

  return (
    <main
      style={{
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "60px 24px 100px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            margin: "0 0 12px 0",
          }}
        >
          {labels.servicesTitle}
        </h2>
        <p style={{ fontSize: "17px", color: "#86868b", margin: 0 }}>
          {labels.servicesSubtitle}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
          alignItems: "stretch",
        }}
      >
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "14px",
              padding: "32px 24px",
              boxShadow: pkg.popular
                ? "0 10px 25px rgba(0,0,0,0.08)"
                : "0 4px 12px rgba(0,0,0,0.03)",
              border: pkg.popular ? "2px solid #0071e3" : "1px solid #d2d2d7",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {pkg.popular && (
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "#0071e3",
                  color: "#ffffff",
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "4px 12px",
                  borderRadius: "12px",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                  whiteSpace: "nowrap",
                }}
              >
                {labels.mostPopular}
              </span>
            )}

            <h3
              style={{
                fontSize: "20px",
                fontWeight: 600,
                margin: "0 0 8px 0",
              }}
            >
              {lang === "RO" ? pkg.titleRo : pkg.titleEn}
            </h3>

            <div
              style={{
                fontSize: "28px",
                fontWeight: 700,
                margin: "16px 0 24px 0",
                color: "#1d1d1f",
              }}
            >
              {lang === "RO" ? pkg.priceRo : pkg.priceEn}
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 32px 0",
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {(lang === "RO" ? pkg.featuresRo : pkg.featuresEn).map(
                (feat, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "14px",
                      color: "#515154",
                      display: "flex",
                      gap: "8px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "#0071e3", fontWeight: "bold" }}>
                      ✓
                    </span>
                    {feat}
                  </li>
                )
              )}
            </ul>

            <Link
              href={`/contact?package=${pkg.id}`}
              style={{
                display: "block",
                textAlign: "center",
                backgroundColor: pkg.popular ? "#0071e3" : "#e8e8ed",
                color: pkg.popular ? "#ffffff" : "#1d1d1f",
                textDecoration: "none",
                padding: "12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              {labels.bookSession}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
