import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <meta
            content='Capsid wings project is an NFT derivative world, Mint wings NFT can lead you to capsid zone,When you have blue chip NFT, like Azuki, BAYC, you can empower many rights to them here,The best NFT derivative create platform,Creator to earn money here.'
            name='description'
          />
          <meta
            content='Capsid wings,Mint wings NFT,NFT,NFT Derivative Community,NFT Creator,NFT derivative world'
            name='keywords'
          />
          <link href='/favicon.ico' rel='icon' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
