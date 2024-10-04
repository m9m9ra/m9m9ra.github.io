import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "M9M9Ra | Development",
    template: "%s | m9m9ra.github.io",
  },
  description: "M9M9Ra | Development: Flutter & React Native",
  openGraph: {
    title: "m9m9ra.github.io",
    description:
      "M9M9Ra | Development: Flutter & React Native",
    // url: "https://chronark.com",
    // siteName: "chronark.com",
    images: [
      {
        url: "https://m9m9ra.github.io/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "M9M9Ra",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
        <meta name="google-site-verification" content="z4BV_LeD-sc-C4cwvDTeD_ZJG0wIUiIEWwQ7pxryAOY" />
        <meta name="yandex-verification" content="4213751e39cb041d" />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
      </body>
    </html>
  );
}
