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
          <link             rel="preload"            as="font"

 href="/fonts/style.css" rel="stylesheet"/>
<link rel="preload" href="/fonts/fsdiavlomedium.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/svn-larch-shaded.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/helveticaneuemedium.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/utm-caviar1.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/utm-centurbold.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/fsdiavlobold.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/fsdiavlobook.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
<link rel="preload" href="/fonts/fa-solid-900.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>

        </Head>
        <body>
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