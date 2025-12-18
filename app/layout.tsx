import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/Gotham-Book.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Gotham-Book.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gotham-book",
});

export const metadata: Metadata = {
  title: "C&T Solution Inc. | 智愛科技股份有限公司",
  description: "C&T is a leading industrial technology solutions provider that designs, manufactures and delivers rugged, industrial-grade computers for maintaining mission-critical operations at the harsh edge. C&T dedicates to stay ahead of market trends, adhere to global standards, and respond to customer needs at a competitive rate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${myFont.variable} antialiased`}

      >
        {children}
      </body>
    </html>
  );
}
