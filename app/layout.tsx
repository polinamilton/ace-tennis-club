import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CustomCursor from "./components/CustomCursor";

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
        {children}
        <Script id="viewport-zoom" strategy="afterInteractive">{`
          (function(){
            function applyZoom(){
              document.documentElement.style.zoom = Math.min(1, window.innerWidth / 1440);
            }
            applyZoom();
            window.addEventListener('resize', applyZoom);
          })();
        `}</Script>
      </body>
    </html>
  );
}
