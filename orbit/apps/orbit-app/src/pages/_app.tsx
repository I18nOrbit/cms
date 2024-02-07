import { AppProps } from 'next/app';
import Head from 'next/head';
import { I18nProvider } from '@orbit/translations';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { QueryClientProviderWrapper } from '@orbit/core';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>i18nOrbit</title>
      </Head>
      <main className="app">
        <I18nProvider>
          <MantineProvider defaultColorScheme='auto'>
            <QueryClientProviderWrapper>
              <Component {...pageProps} />
            </QueryClientProviderWrapper>
          </MantineProvider>
        </I18nProvider>
      </main>
    </>
  );
}

export default CustomApp;
