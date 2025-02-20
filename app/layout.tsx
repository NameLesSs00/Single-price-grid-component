import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Single price grid component",
  description: "Its time to face my fears and learn CSS Grid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
