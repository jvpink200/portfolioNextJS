import NavBar from "@/components/NavBar";
import Herobanner from "@/components/HeroBanner";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import { AuthContext } from "./_app";
import ResultPane from "../components/ResultPane";

export default function Home() {
  const [results, setResults] = useState(null);
  const accessToken = useContext(AuthContext);

  useEffect(() => {
    if (accessToken === null) return;
    const fetchPets = async () => {
      const petResults = await fetch(
        "https://api.petfinder.com/v2/animals?location=24558",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const json = await petResults.json();
      setResults(json.animals);
    };
    fetchPets();
  }, [accessToken]);
  if (results === null) return null;
  return (
    <>
      <Head>
        <title>About a programmer</title>
        <meta name="description" content="portfolio to showcase work" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Herobanner />
      <Projects />
      <Footer />
    </>
  );
}
