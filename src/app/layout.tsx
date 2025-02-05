import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import ScreenSizeGuard from "../components/screenSizeLogin";

const inter = Inter({ subsets: ["latin"] });

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
      <body
        className={twMerge(
          inter.className,
          "bg-background text-primary antialiased"
        )}
      >
        <ScreenSizeGuard>{children}</ScreenSizeGuard>
      </body>
    </html>
  );
}
