import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
    <Html>
      <Head>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robot" content="follow, index" />
      <meta name="description" content="A portfolio page for Thor-Erik Støvland" />
      <meta name="robots" content="index, follow" />
      <meta name="keywords" content="webdesign, website, homepage, design, logo, front end" />
      <meta name="author" content="Thor-Erik" />
      </Head>
      <body>
        <NextScript />
        <Main />
      </body>
    </Html>
    )
  }
}
 
export default MyDocument;