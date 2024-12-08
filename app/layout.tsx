import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "@/app/providers/CartProvider";
import Header from "@/app/components/Header";
import Notification from "@/app/components/Notification";
import Footer from "@/app/components/Footer";

const NotoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Timbu",
  description: "Timbu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${NotoSansMono.className} antialiased`}>
        <CartProvider>
          <Notification />
          <Header />

          {children}

          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
