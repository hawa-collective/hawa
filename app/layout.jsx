"use client";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap");
}

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div className="main-page-wrapper">
              {children}
              <ScrollToTop />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
