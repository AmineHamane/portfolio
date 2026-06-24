import type { Metadata } from "next";
import { Geist, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});
const jetbrainsMono = JetBrains_Mono({ variable: "--font-jetbrains-mono", subsets: ["latin"], display: "swap" });

const SITE_URL = "https://aminehamane.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amine Hamane — Python · Data Science · Machine Learning · Generative AI",
    template: "%s · Amine Hamane",
  },
  description:
    "Python developer with 5+ years in IT, building end-to-end machine learning, data pipelines, and AI-powered backends — from deep-learning models to live, API-integrated applications.",
  keywords: [
    "Amine Hamane", "Python Developer", "Data Scientist", "Machine Learning Engineer",
    "Data Engineer", "PyTorch", "FastAPI", "Generative AI", "Montreal", "Brossard", "Quebec",
  ],
  authors: [{ name: "Amine Hamane" }],
  creator: "Amine Hamane",
  openGraph: {
    type: "website",
    title: "Amine Hamane — Python · Data Science · ML · Generative AI",
    description:
      "End-to-end ML, data pipelines, and AI-powered backends. From deep-learning models to live, API-integrated applications.",
    siteName: "Amine Hamane",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Hamane — Python · Data Science · ML · Generative AI",
    description: "End-to-end ML, data pipelines, and AI-powered backends.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-fg">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
