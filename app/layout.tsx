import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import CardLayout from "@/components/CardLayout";
import ThemeProvider from "@/components/theme/themeProvider";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivansh Raghav",
  description:
    "Shivansh Raghav is a Software developer with 4+ years of experience in MERN stack (React, Nodejs & Nextjs).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider>
          <CardLayout>
            <Navbar />
            {children}
            <Footer />
          </CardLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
