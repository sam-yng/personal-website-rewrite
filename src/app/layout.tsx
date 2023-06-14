import "../css/globals.css";
import React from "react";
import { Providers } from "./providers";

export const metadata = {
  title: "Sam Edgeworth v2",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="Document">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
