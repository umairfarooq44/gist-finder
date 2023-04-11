import { ReactNode } from 'react';
import { SWRConfig } from 'swr';
import httpService from '../../utils/httpService';

const fetcher = (url: string) => {
  if (url) {
    return httpService.get({ url }).then((res) => res.data);
  }
  return;
};

export const SwrProvider = ({ children }: { children: ReactNode }) => (
  <SWRConfig
    value={{
      fetcher,
      errorRetryCount: 5,
      revalidateOnFocus: false,
      revalidateIfStale: false,

      onErrorRetry: (error) => {
        // Never retry on 401
        if (error?.response?.status === 401) return;
      },
    }}
  >
    {children}
  </SWRConfig>
);
