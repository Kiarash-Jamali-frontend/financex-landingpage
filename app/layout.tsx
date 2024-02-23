import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const inter = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinanceX - The World's Most Modern Card Platform",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-base-100"}>{children}</body>
    </html>
  );
}
