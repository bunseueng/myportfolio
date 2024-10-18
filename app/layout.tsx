import type { Metadata } from "next";
import "./globals.css";
import MouseTrackingBackground from "@/components/ui/BackgroundGradient";
import { Roboto, Noto_Sans } from "next/font/google";
import OptimizedPortfolio from "@/components/OptimizedComponent";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bunseueng.vercel.app"),
  title: {
    default: "Bunseu's Portfolio",
    template: "%s - Bunseu's Portfolio",
  },
  description:
    "Explore the portfolio of a passionate web developer specializing in Next.js, React, and JavaScript. Check out my projects and experience in building efficient, responsive web applications.",
  icons: {
    icon: [{ url: "/favicon.ico", type: "image/x-icon", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: [{ url: "/apple-touch-icon.png" }],
  },
  applicationName: "Bunseu's Portfolio",
  keywords: ["portfolio", "resume", "project", "coding"],
  authors: [{ name: "Eng Bunseu", url: "https://bunseueng.vercel.app" }],
  creator: "Eng Bunseu",
  publisher: "Eng Bunseu",
  openGraph: {
    title: "Bunseu's Portfolio",
    description:
      "Explore the portfolio of a passionate web developer specializing in Next.js, React, and JavaScript. Check out my projects and experience in building efficient, responsive web applications.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
    url: "https://bunseueng.vercel.app",
    siteName: "Bunseu's Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunseu's Portfolio",
    description:
      "Explore the portfolio of a passionate web developer specializing in Next.js, React, and JavaScript. Check out my projects and experience in building efficient, responsive web applications.",
    images: ["/opengraph-image.png"],
    site: "@bunseueng",
    creator: "@EngBunseu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skill" },
    { name: "Project", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <html lang="en" className={`${roboto.className} ${notoSans.className}`}>
      <body>
        <MouseTrackingBackground>
          <div className="relative min-h-screen">
            <OptimizedPortfolio>
              <main className="min-h-screen text-gray-100 selection:bg-teal-300 selection:text-teal-900">
                {children}
              </main>
            </OptimizedPortfolio>
            <FloatingNav navItems={links} />
          </div>
        </MouseTrackingBackground>
      </body>
    </html>
  );
}
