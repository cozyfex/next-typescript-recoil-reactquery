import { QueryClient } from 'react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: process.env.NEXT_PUBLIC_DEBUG !== 'true',
      useErrorBoundary: true,
      onError: error => null,
    },
  },
});
