"use client";

import Aos from "aos";
import { useEffect } from "react";
import { LoadingProvider } from "./context/loadingContext"; // Ensure correct path
import Buffer from "@/components/buffer/Buffer";

import "aos/dist/aos.css";
import "../styles/index.scss";

import ScrollToTop from "@/components/common/ScrollTop";
import { AntdRegistry } from '@ant-design/nextjs-registry';

import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { UserProvider } from "@auth0/nextjs-auth0/client";

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
      <LoadingProvider>
        <UserProvider>
          <AppRouterCacheProvider>
          <AntdRegistry>
            <ThemeProvider theme={theme}>
              <div className="main-page-wrapper">
                {/* <Buffer /> */}
                {children}
                <ScrollToTop />
              </div>
            </ThemeProvider>
            </AntdRegistry>
          </AppRouterCacheProvider>
        </UserProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}
