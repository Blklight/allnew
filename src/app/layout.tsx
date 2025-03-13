import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Barlow,
  EB_Garamond,
  JetBrains_Mono,
  Playfair_Display,
  Roboto,
  Overpass,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { DevTools } from "@/components/dev-tools";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  display: "swap",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
});

const ebgaramond = EB_Garamond({
  variable: "--font-ebgaramond",
  display: "swap",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  display: "swap",
  subsets: ["latin"],
});

const overpass = Overpass({
  variable: "--font-overpass",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "All New Blklight",
  description: "Wireframes for the new Blklight website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${barlow.variable} ${ebgaramond.variable} ${jetbrains.variable} ${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${roboto.variable} ${overpass.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={["light", "dark", "book", "system"]}
          enableSystem
          disableTransitionOnChange
        >
          {/* <div className="relative"> */}
          {children}

          {/* </div> */}
          <Toaster />
          <DevTools />
        </ThemeProvider>
      </body>
    </html>
  );
}
