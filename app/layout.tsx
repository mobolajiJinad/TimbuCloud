import type { Metadata } from "next";
import { Noto_Sans_Mono, Roboto_Mono } from "next/font/google";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

import { CartProvider } from "@/app/providers/CartProvider";
import Header from "@/app/components/Header";
import Notification from "@/app/components/Notification";
import Footer from "@/app/components/Footer";
import { WagmiProviderWrapper } from "@/app/providers/WagmiProvider";

const NotoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  display: "swap",
});

const RobotoMono = Roboto_Mono({
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
      <body
        className={`${NotoSansMono.className} ${RobotoMono.className} antialiased`}
      >
        <WagmiProviderWrapper>
          <CartProvider>
            <Notification />
            <Header />

            {children}

            <Footer />
          </CartProvider>
        </WagmiProviderWrapper>
      </body>
    </html>
  );
}
