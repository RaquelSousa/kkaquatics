import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SocialMediaBar from "@/components/socialMediaBar/social-media-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "K&K Aquatics",
  description: "K and K aquatics offers services to build aquariums",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <SocialMediaBar />
          <div className="mt-28">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
