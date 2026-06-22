import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Rudra Innovations | From Concept to Creation",
  description:
    "Rudra Innovations — Premium engineering technology company delivering Product Design, CAD/CAM/CAE, Additive Manufacturing, CNC Machining, Industry 4.0, AI Vision Systems, and Automation Solutions.",
  keywords: [
    "Rudra Innovations",
    "Product Design",
    "Additive Manufacturing",
    "CNC Machining",
    "Industry 4.0",
    "AI Vision Systems",
    "CAD CAM CAE",
    "Engineering Consulting",
    "HydraSense",
    "Manufacturing Automation",
    "3D Printing",
    "Prototyping",
  ],
  authors: [{ name: "Rudra Innovations" }],
  openGraph: {
    title: "Rudra Innovations | From Concept to Creation",
    description:
      "Premium engineering technology company — Product Design, Manufacturing, Automation & Industry 4.0 Solutions.",
    url: "https://www.rudrainnovations.com",
    siteName: "Rudra Innovations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rudra Innovations | From Concept to Creation",
    description:
      "Premium engineering technology company — Product Design, Manufacturing, Automation & Industry 4.0.",
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Bebas+Neue&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rudra Innovations",
              url: "https://www.rudrainnovations.com",
              description:
                "Premium engineering technology company delivering end-to-end engineering solutions from concept to creation.",
              serviceArea: "India",
              offers: [
                {
                  "@type": "Offer",
                  name: "Product Design & Development",
                },
                {
                  "@type": "Offer",
                  name: "Additive Manufacturing",
                },
                {
                  "@type": "Offer",
                  name: "CNC Machining",
                },
                {
                  "@type": "Offer",
                  name: "Industry 4.0 Solutions",
                },
                {
                  "@type": "Offer",
                  name: "AI Vision Systems",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
