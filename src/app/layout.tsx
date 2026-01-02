import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getConfig, getProfile } from "@/lib/data";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const config = getConfig();
const profile = getProfile();

export const metadata: Metadata = {
  title: config.site.title,
  description: config.site.description,
  keywords: config.seo.keywords,
  authors: [{ name: config.seo.author }],
  openGraph: {
    title: config.site.title,
    description: config.site.description,
    url: config.site.url,
    siteName: profile.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.site.title,
    description: config.site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
