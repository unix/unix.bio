import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import BLOG from '../blog.config'
import { CssBaseline } from '@geist-ui/core'
import flush from 'styled-jsx/server'

class BlogDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const styles = CssBaseline.flush()

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {styles}
          {flush()}
        </>
      ),
    }
  }

  render() {
    return (
      <Html lang={BLOG.language}>
        <Head />
        <body>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            (function(){
              if (!window.localStorage) return;
              if (window.localStorage.getItem('theme') === 'dark') {
                document.documentElement.style.background = '#000';
                document.body.style.background = '#000';
              };
            })()
          `,
            }}
          />
          <Main />
          <NextScript />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${BLOG.googleAnalytics}`}
          />
          <script
            async
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${BLOG.googleAnalytics}');
              `,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default BlogDocument
