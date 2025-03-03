import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* 타이틀 이미지 */}
        <link rel="icon" href="/favicon.ico" />
        {/* 공유 하면 뜨는 이미지, 이름 등 */}
        <meta property="og:title" content="My Page Title" />
        <meta
          property="og:description"
          content="This is a description of my page."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
        <meta property="og:url" content="https://example.com" />
        {/* 폰트 파일을 미리 로드해서 성능 최적화 */}
        <link
          rel="preload"
          href="/fonts/PretendardVariable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
