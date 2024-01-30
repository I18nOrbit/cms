import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { I18nProvider } from '@orbit/translations';
import { MantineProvider } from '@mantine/core';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to orbit-app!</title>
      </Head>
      <main className="app">
        <I18nProvider>
          <MantineProvider>
            <Component {...pageProps} />
          </MantineProvider>
        </I18nProvider>
      </main>
    </>
  );
}

export default CustomApp;
