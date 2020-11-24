import "../styles/globals.css";
import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
