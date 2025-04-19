import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style>{`
          body {
            margin: 0;
            padding: 0;
            min-height: 100vh;
          }
          
          html.dark {
            background-color: #121212;
          }
          
          html.dark body {
            background-color: #121212;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}