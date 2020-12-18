import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../src/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link async rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link rel="preload"
      as="style"
      href="$CSS&display=swap" />
<link rel="preload"
      as="style"
      href="$CSS" />
<link rel="stylesheet"
      href="$CSS&display=swap"
      media="print" onload="this.media='all'" />
          <link async href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
          {/* <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=UA-174020829-1"
  /> */}

  {/* <script
    dangerouslySetInnerHTML={{
      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-174020829-1');
        `,
    }}
  /> */}
   {/* <script
    dangerouslySetInnerHTML={{
      __html: `
      document.addEventListener('DOMContentLoaded', function() {
        SF.init({"campaign_id":"282","is_reoccur":1,"is_lastclick": 1} );
        SF.track();
      });
        `,
    }}
  /> */}
          {/* <link async href="/fonts/style.css" rel="stylesheet"/> */}
          <link rel="dns-prefetch" href="//www.googletagmanager.com"></link>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=GTM-PLT8FM9`}
          />
          
          <script
              dangerouslySetInnerHTML={{
                __html: `
                (function(w, d, s, l, i){
                  w[l] = w[l] || []; w[l].push({
                      'gtm.start':
                          new Date().getTime(), event: 'gtm.js'
                  }); var f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                          'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
                }) (window, document, 'script', 'dataLayer', 'GTM-PLT8FM9');
            `,
              }}
          />
        </Head>
        <body>
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> */}
{/* <script src="https://service-api.accesstrade.vn/js/SFtracking.js"></script> */}
  
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {

  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};