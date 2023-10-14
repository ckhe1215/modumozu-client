import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";
import localFont from "next/font/local";
import RootLayoutStyle from "@/components/common/RootLayout";
import "./globals.css";

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: "./PretendardVariable.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modumozu",
  description: "Modumozu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={myFont.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
      </head>
      <body>
        <StyledComponentsRegistry>
          <RootLayoutStyle>{children}</RootLayoutStyle>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
