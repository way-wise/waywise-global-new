import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { ProgressProvider } from "@/providers/progress-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Way-Wise Global",
  description: "Way-Wise Global is a diversified company offering a wide range of services across multiple industries. Specializing in export-import, travel and tourism, education consultancy, international job recruitment, event management and many more.",
  keywords: ["Way-Wise Global", "export-import", "travel and tourism", "education consultancy", "international job recruitment", "event management"],
  openGraph: {
    title: "Way-Wise Global",
    description: "Way-Wise Global is a diversified company offering a wide range of services across multiple industries. Specializing in export-import, travel and tourism, education consultancy, international job recruitment, event management and many more.",
    images: "/images/wwg_logo_horizontal.webp",
    url: "https://waywise-global.com",
    siteName: "Way-Wise Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Way-Wise Global",
    description: "Way-Wise Global is a diversified company offering a wide range of services across multiple industries. Specializing in export-import, travel and tourism, education consultancy, international job recruitment, event management and many more.",
    images: "/images/wwg_logo_horizontal.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ProgressProvider>
          {children}
          <Toaster />
        </ProgressProvider>
      </body>
    </html>
  );
}
