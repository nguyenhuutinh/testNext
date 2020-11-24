import "../styles/globals.css";
import Head from "next/head";
import {useEffect} from "react"
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  id: 'GTM-XXXX'
}
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  
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
