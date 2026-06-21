import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";
import { LanguageProvider } from "./i18n/LanguageContext";
import { SectionProvider } from "./components/SectionContext";

const roboto = Roboto({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ACE Tennis Club — Where Champions Are Made",
  description:
    "Premium tennis club with world-class clay courts, expert coaches, and an elite community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <CustomCursor />
        <SectionProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </SectionProvider>
      </body>
    </html>
  );
}
