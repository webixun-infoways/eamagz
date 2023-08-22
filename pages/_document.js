import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="robots" content="noindex, follow" />
        <link rel="shortcut icon" href="/fav/fav.png" type="image/x-icon" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/vendor/base.css" />
        <link rel="stylesheet" href="/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/vendor/font-awesome.css" />
        <link rel="stylesheet" href="/css/vendor/slick-theme.css" />
        <link rel="stylesheet" href="/css/vendor/slick.css" />
        <link rel="stylesheet" href="/css/plugins/plugins.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/vendor/jquery.js"></script>
        <script src="/js/vendor/bootstrap.min.js"></script>
        <script src="/js/vendor/jquery.style.switcher.js"></script>
        <script src="/js/vendor/js.cookie.js"></script>
        <script src="/js/vendor/modernizr.min.js"></script>
        <script src="/js/vendor/slick.min.js"></script>
        <script src="/js/vendor/tweenmax.min.js"></script>
        <script src="/js/main.js"></script>
      </body>
    </Html>
  );
}
