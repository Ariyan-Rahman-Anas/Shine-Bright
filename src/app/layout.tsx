import type { Metadata } from "next";
import "./globals.css";
import { Bayon, Chivo, Yellowtail } from "next/font/google";
import { Toaster } from "sonner";
import StoreProvider from "@/providers/StoreProvider";
import UserProvider from "@/providers/UserProvider";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const chivo = Chivo({
  subsets: ["latin"],
  variable: "--font-chivo",
  weight: ["400", "700"],
  display: "swap",
});

const bayon = Bayon({
  subsets: ["latin"],
  variable: "--font-bayon",
  weight: ["400"],
  display: "swap",
});

const yellowtail = Yellowtail({
  subsets: ["latin"],
  variable: "--font-yellowtail",
  weight: ["400"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Shine Bright",
  description: "Shine Bright is a makeup and skin care solution",
  keywords: ["shine", "bright", "shine-bright", "makeup", "skincare", "beauty", "cosmetics", "products", "shop", "online"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.variable} ${bayon.variable} ${yellowtail.variable} antialiased bg-mainBg `}
      >
        <Toaster
          position="bottom-right"
          richColors={true}
          toastOptions={{ duration: 4000 }} />
        <StoreProvider>
          <UserProvider>
            <Navbar />
            {children}
            <Footer />
          </UserProvider>
        </StoreProvider>
      </body>
    </html>
  );
}