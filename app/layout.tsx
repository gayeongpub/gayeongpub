import { ReactNode } from "react";
import ThemeProviderWrapper from "@/components/ThemeProviderWrapper"; // ✅ 올바른 경로
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProviderWrapper>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProviderWrapper>
      </body>
    </html>
  );
}
