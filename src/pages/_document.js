import { Html, Head, Main, NextScript } from "next/document";

import NavBar from "@/components/NavBar";
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <NavBar active="activeHome" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
