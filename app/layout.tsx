import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AXL Visual Studio | Fotografie Profesională",
  description:
    "Portofoliu și servicii de fotografie profesională – portrete, peisaje, evenimente. AXL Visual Studio, România.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
