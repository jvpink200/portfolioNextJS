import "@/styles/globals.scss";
import { useEffect, createContext, useState } from "react";

export const AuthContext = createContext();

export default function App({ Component, pageProps }) {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const fetchAccessToken = async () => {
      const res = await fetch("/api/oauth-token-petfinder");
      const json = await res.json();
      console.log(json);
      setAccessToken(json.access_token);
    };
    fetchAccessToken();
  }, []);
  return (
    <AuthContext.Provider value={accessToken}>
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}
