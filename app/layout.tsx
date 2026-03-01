import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premium Dental Clinic - Your Smile, Our Passion",
  description: "Advanced Dental Care with Modern Technology. Expert cosmetic dentistry, teeth whitening, dental implants, and orthodontics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
