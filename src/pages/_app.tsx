import 'tailwindcss/tailwind.css';
import '../globalStyles.scss';

import type {AppProps} from 'next/app';
import Head from 'next/head';
import {memo} from 'react';

const MyApp = memo(({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link href="/logo.png" rel="icon" />
      </Head>
    </>
  );
});

export default MyApp;
