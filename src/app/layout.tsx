import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import ThemeProvider from "../components/themetoggle/ThemeToggle"; 
import LoaderWraper from "@/components/loader/LoaderWraper";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <StoreProvider>
          {/* <ThemeProvider > Theme wrapper */}
            <LoaderWraper />
          <ThemeProvider />
            <Header />
            {children}
            <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
