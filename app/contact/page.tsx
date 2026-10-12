"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/lib/LanguageContext";
import { PACKAGES, t } from "@/lib/i18n";

const WHATSAPP_NUMBER = "40743346249";
const CONTACT_EMAIL = "alex@visualstudio.ro";

function ContactForm() {
  const { lang } = useLanguage();
  const labels = t[lang];
  const searchParams = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    package: "PORTRET_STANDARD",
    message: "",
  });

  useEffect(() => {
    const pkg = searchParams.get("package");
    if (pkg && PACKAGES.some((p) => p.id === pkg)) {
      setForm((f) => ({ ...f, package: pkg }));
    }
  }, [searchParams]);

  const selectedPackage = PACKAGES.find((p) => p.id === form.package);

  const handleWhatsApp = () => {
    const packageLabel =
      lang === "RO"
        ? selectedPackage?.titleRo ?? form.package
        : selectedPackage?.titleEn ?? form.package;
    const priceLabel =
      lang === "RO"
        ? selectedPackage?.priceRo ?? ""
        : selectedPackage?.priceEn ?? "";

    const namePart = form.name.trim()
      ? lang === "RO"
        ? `Numele meu este ${form.name.trim()}. `
        : `My name is ${form.name.trim()}. `
      : "";
    const detailsPart = form.message.trim()
      ? form.message.trim()
      : lang === "RO"
        ? "Aș dori o ședință foto."
        : "I would like a photo session.";

    const text = encodeURIComponent(
      lang === "RO"
        ? `Salut Alexandru! ${namePart}Aș dori să discutăm despre pachetul ${packageLabel} (${priceLabel}). ${detailsPart}`
        : `Hi Alexandru! ${namePart}I would like to discuss the ${packageLabel} package (${priceLabel}). ${detailsPart}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  const handleEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const packageLabel =
      lang === "RO"
        ? selectedPackage?.titleRo ?? form.package
        : selectedPackage?.titleEn ?? form.package;
    const priceLabel =
      lang === "RO"
        ? selectedPackage?.priceRo ?? ""
        : selectedPackage?.priceEn ?? "";

    const subject = encodeURIComponent(
      lang === "RO"
        ? `Solicitare ședință foto – ${packageLabel}`
        : `Photo session inquiry – ${packageLabel}`
    );
    const body = encodeURIComponent(
      lang === "RO"
        ? `Nume: ${form.name}\nEmail: ${form.email}\nPachet: ${packageLabel} (${priceLabel})\n\nMesaj:\n${form.message}`
        : `Name: ${form.name}\nEmail: ${form.email}\nPackage: ${packageLabel} (${priceLabel})\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "60px 24px 100px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          fontWeight: 700,
          letterSpacing: "-0.5px",
          margin: "0 0 8px 0",
          textAlign: "center",
        }}
      >
        {labels.contactTitle}
      </h2>
      <p
        style={{
          fontSize: "15px",
          color: "#86868b",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        {labels.contactSubtitle}
      </p>

      {/* WhatsApp */}
      <button
        type="button"
        onClick={handleWhatsApp}
        style={{
          width: "100%",
          backgroundColor: "#25D366",
          color: "#ffffff",
          border: "none",
          borderRadius: "12px",
          padding: "18px 20px",
          textAlign: "center",
          cursor: "pointer",
          fontWeight: 600,
          boxShadow: "0 4px 12px rgba(37, 211, 102, 0.25)",
          marginBottom: "32px",
          fontSize: "15px",
        }}
      >
        💬 {labels.whatsappBtn}
      </button>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "24px 0",
          color: "#86868b",
          fontSize: "13px",
        }}
      >
        <div
          style={{ flex: 1, height: "1px", backgroundColor: "#d2d2d7" }}
        />
        <span style={{ padding: "0 16px" }}>{labels.orEmail}</span>
        <div
          style={{ flex: 1, height: "1px", backgroundColor: "#d2d2d7" }}
        />
      </div>

      {/* Email form */}
      <form
        onSubmit={handleEmail}
        style={{ display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{ fontSize: "12px", fontWeight: 600, color: "#1d1d1f" }}
          >
            {labels.fullName}
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            style={{
              border: "1px solid #d2d2d7",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "14px",
              outline: "none",
              backgroundColor: "#ffffff",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{ fontSize: "12px", fontWeight: 600, color: "#1d1d1f" }}
          >
            {labels.email}
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            style={{
              border: "1px solid #d2d2d7",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "14px",
              outline: "none",
              backgroundColor: "#ffffff",
            }}
          />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{ fontSize: "12px", fontWeight: 600, color: "#1d1d1f" }}
          >
            {labels.chosenPackage}
          </label>
          <select
            value={form.package}
            onChange={(e) => setForm({ ...form, package: e.target.value })}
            style={{
              border: "1px solid #d2d2d7",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "14px",
              backgroundColor: "#ffffff",
              outline: "none",
            }}
          >
            {PACKAGES.map((pkg) => (
              <option key={pkg.id} value={pkg.id}>
                {lang === "RO"
                  ? `${pkg.titleRo} (${pkg.priceRo})`
                  : `${pkg.titleEn} (${pkg.priceEn})`}
              </option>
            ))}
          </select>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label
            style={{ fontSize: "12px", fontWeight: 600, color: "#1d1d1f" }}
          >
            {labels.message}
          </label>
          <textarea
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            style={{
              border: "1px solid #d2d2d7",
              borderRadius: "8px",
              padding: "12px",
              fontSize: "14px",
              outline: "none",
              backgroundColor: "#ffffff",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#0071e3",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            padding: "14px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          {labels.sendEmail}
        </button>
      </form>
    </main>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div style={{ padding: "60px", textAlign: "center" }}>...</div>}>
      <ContactForm />
    </Suspense>
  );
}
