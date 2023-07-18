import NavBar from "@/components/NavBar";
import Herobanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>About a programmer</title>
        <meta name="description" content="portfolio to showcase work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="home" />
      <Herobanner />
      <Projects />
    </>
  );
}
