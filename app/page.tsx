"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { PHOTOS } from "@/lib/i18n";

export default function Home() {
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<(typeof PHOTOS)[number] | null>(
    null
  );

  return (
    <main>
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "40px 20px 80px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "24px",
          }}
        >
          {PHOTOS.map((photo) => (
            <article
              key={photo.id}
              onClick={() => setSelected(photo)}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "16px",
                overflow: "hidden",
                border: "1px solid #e5e5e5",
                boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 12px rgba(0,0,0,0.03)";
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "240px",
                  backgroundColor: "#eee",
                  overflow: "hidden",
                }}
              >
                <img
                  src={photo.src}
                  alt={lang === "RO" ? photo.titleRo : photo.titleEn}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div style={{ padding: "16px 20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#888",
                    marginBottom: "6px",
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                >
                  <span>
                    {lang === "RO" ? photo.categoryRo : photo.categoryEn}
                  </span>
                  <span>{photo.location}</span>
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#111",
                  }}
                >
                  {lang === "RO" ? photo.titleRo : photo.titleEn}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setSelected(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            backgroundColor: "rgba(0,0,0,0.92)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            cursor: "zoom-out",
          }}
        >
          <img
            src={selected.src}
            alt={lang === "RO" ? selected.titleRo : selected.titleEn}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: "90%",
              maxHeight: "85vh",
              objectFit: "contain",
              borderRadius: "12px",
              cursor: "default",
            }}
          />
          <button
            type="button"
            onClick={() => setSelected(null)}
            aria-label="Close"
            style={{
              position: "absolute",
              top: "20px",
              right: "24px",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              fontSize: "28px",
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
      )}
    </main>
  );
}
