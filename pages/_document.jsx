import Document, { Html, Head, Main, NextScript } from 'next/document'
import BLOG from '../blog.config'
import { CSSBaseline } from '@zeit-ui/react'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CSSBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
        </>
      )
    }
  }
  
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
