// src/app/layout.tsx
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Seed Marketplace",
  description: "Platform to discover and get all kinds of seeds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen px-6 py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
