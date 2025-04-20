import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import { ThemeProvider } from "../context/ThemeContext";
// Import SpeedInsights
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen w-full bg-lightBg dark:bg-darkBg text-lightText dark:text-darkText">
        <Navbar />
        <main className="flex-grow w-full bg-lightBg dark:bg-darkBg">
          <Component {...pageProps} />
        </main>
      </div>
      {/* Add SpeedInsights component */}
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default MyApp;