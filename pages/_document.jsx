import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '../blog.config'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={BLOG.language}>
        <Head />
        <body>
        <Main />
        <NextScript />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.googleAnalytics}`} />
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${BLOG.googleAnalytics}');
            `
          }}
        />
        </body>
      </Html>
    )
  }
}

export default MyDocument
