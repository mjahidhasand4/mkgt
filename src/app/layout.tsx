import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@/app/globals.css";
import { Footer, Header } from "@/components";
import type { Metadata } from "next";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "মুক্তিযোদ্ধা গবেষণা ও কল্যাণ ট্রাস্ট",
};

const solaimanlipi = localFont({
  src: "./fonts/solaimanlipi.ttf",
  variable: "--font-solaimanlipi",
  weight: "400 500 700",
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={solaimanlipi.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
