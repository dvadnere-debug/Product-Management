import { Geist, Geist_Mono } from "next/font/google";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

import Navbar from "../components/web/Navbar";
import { ThemeProvider } from "../components/ui/theme-provider.jsx";

const oswald = Oswald({
  subsets:["latin"],
  variable: "--font-oswald",
  weight:["400", "500", "600", "700"],
  
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ProdPro",
  description: "This website contains a product management dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <main className="max-w-7xl mx-auto w-full px-4 md:px-6 lg:px-8 ">
        <Navbar/>
        {children}</main></ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
