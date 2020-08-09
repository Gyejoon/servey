import Head from 'next/head';
import { AppProps } from 'next/app';
import GlobalStyles from 'lib/styles/GlobalStyles';
import 'antd/dist/antd.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
