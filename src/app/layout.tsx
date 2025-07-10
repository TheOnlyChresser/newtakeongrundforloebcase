import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kulturcafé Oskar",
  description: "Kulturcafé Oskar er et spillested med levende musik for levende mennesker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}
