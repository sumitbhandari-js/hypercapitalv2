import "./globals.css";
import type { Metadata } from "next";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";

export const metadata: Metadata = {
  title: "HyperCapital is a global trade, finance and investment consulting ",
  description:
    "HyperCapital Inc. is a global trade, finance and investment consulting firm that collaborates and partners with private and public sector companies to help and manage their business finances, commodity procurement challenges and design tactical strategies to leverage and capture their greatest opportunities to meet their financial and invest goals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body style={{ fontFamily: "Noto Sans" }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
