import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyChatbot | Arooj",
  description: "A personal AI chatbot created by Arooj.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}