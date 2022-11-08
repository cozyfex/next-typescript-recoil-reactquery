import Head from 'next/head';
import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from 'react-query';

import { queryClient } from '@hooks/queries/factories/queryClient';


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
