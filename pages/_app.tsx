import { queryClient } from '@hooks/queries/factories/queryClient';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>NextJS + TypeScript + Recoil + ReactQuery</title>
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
