import type { Metadata } from "next";
import { Roboto, Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ScreenSizeGuard from "../components/screenSizeLogin";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Averon",
  description: "Welcome to the Home Page of Averon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(roboto.className, "bg-zinc-950 antialiased")}>
        <ScreenSizeGuard>{children}</ScreenSizeGuard>
      </body>
    </html>
  );
}
