import Head from "next/head";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import Image from "next/image";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>About a programmer</title>
        <meta name="description" content="portfolio to showcase work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HeroBanner />
      <Projects />
    </>
  );
}
