import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const fontMain = Noto_Sans({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Название страницы",
  description: "Описание",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={fontMain.className}>{children}</body>
    </html>
  );
}
