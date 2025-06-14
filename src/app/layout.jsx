import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/toastProvider/ToastProvider";
import ReduxProvider from "@/redux/ReduxProvider";
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";
import NavbarProvider from "@/layouts/navbar/NavbarProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <Header />
          <ToastProvider />
          <NavbarProvider>{children}</NavbarProvider>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
