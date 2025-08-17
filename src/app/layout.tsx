import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from 'next-themes'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TheHamkerCat | Akshay Rajput - Full Stack Developer",
  description: "TheHamkerCat (Akshay Rajput) - 21-year-old Full Stack Developer from New Delhi, India. Building cool stuff since 2020. Expert in React, Next.js, Python, and modern web technologies.",
  keywords: ["TheHamkerCat", "Akshay Rajput", "Full Stack Developer", "React Developer", "Next.js Developer", "Python Developer", "Web Developer", "Software Engineer", "India", "New Delhi"],
  authors: [{ name: "TheHamkerCat", url: "https://hamker.dev" }],
  creator: "TheHamkerCat",
  publisher: "TheHamkerCat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hamker.dev",
    title: "TheHamkerCat | Akshay Rajput - Full Stack Developer",
    description: "TheHamkerCat (Akshay Rajput) - 21-year-old Full Stack Developer from New Delhi, India. Building cool stuff since 2020.",
    siteName: "TheHamkerCat",
    images: [
      {
        url: "https://hamker.dev/pfp.png",
        width: 1200,
        height: 630,
        alt: "TheHamkerCat - Akshay Rajput",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheHamkerCat | Akshay Rajput - Full Stack Developer",
    description: "TheHamkerCat (Akshay Rajput) - 21-year-old Full Stack Developer from New Delhi, India. Building cool stuff since 2020.",
    creator: "@TheHamkerCat",
    images: ["https://hamker.dev/pfp.png"],
  },
  alternates: {
    canonical: "https://hamker.dev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "TheHamkerCat",
              "alternateName": "Akshay Rajput",
              "url": "https://hamker.dev",
              "image": "https://hamker.dev/pfp.png",
              "sameAs": [
                "https://github.com/TheHamkerCat",
                "https://www.linkedin.com/in/thehamkercat",
                "https://t.me/TheHamkerCat"
              ],
              "jobTitle": "Full Stack Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Independent"
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "New Delhi",
                "addressCountry": "India"
              },
              "email": "thehamkercat@gmail.com",
              "birthDate": "2003",
              "knowsAbout": [
                "React",
                "Next.js",
                "Python",
                "JavaScript",
                "TypeScript",
                "Golang",
                "Rust",
                "Kotlin",
                "Full Stack Development",
                "Web Development",
                "Software Engineering",
                "ManyOtherThings"
              ],
              "description": "TheHamkerCat (Akshay Rajput) is a 21-year-old Full Stack Developer from New Delhi, India, building cool stuff since 2020."
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors`}
      >
        {/* TODO: light mode looks awful, so used forcedTheme here, will remove later */}
        <ThemeProvider enableSystem attribute="class" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
