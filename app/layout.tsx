import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fruit Dessert",
  description: "Los mejores postres de frutas en la ciudad de LA PAZ, comprame case bien riquito te voy a dar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}