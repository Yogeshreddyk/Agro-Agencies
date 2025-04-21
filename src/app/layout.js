import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amma Agro Agencies | Seeds, Pesticides & Fertilizers",
  description:
    "Your trusted partner in agriculture, providing quality seeds, pesticides, and fertilizers to help farmers thrive.",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "32x32",
      },
    ],
  },
  openGraph: {
    title: "Amma Agro Agencies | Seeds, Pesticides & Fertilizers",
    description:
      "Your trusted partner in agriculture, providing quality seeds, pesticides, and fertilizers to help farmers thrive.",
    url: "https://ammaagro.com",
    siteName: "Amma Agro Agencies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Amma Agro Agencies",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <ClientBody>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </ClientBody>
    </html>
  );
}
