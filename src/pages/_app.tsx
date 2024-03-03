import BackToTopButton from "@/components/back-to-top-btn/BackToTop";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navbar/NavBar";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <BackToTopButton />
      <Footer />
    </>
  );
}
