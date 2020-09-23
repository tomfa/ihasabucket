import qs from 'querystring';
import { NextRouter, useRouter } from 'next/router';
import { useMemo } from 'react';

export const useCurrentUrl = () => {
  const router: NextRouter = useRouter();
  const currentUrl = useMemo(() => {
    if (router.query) {
      return `${router.pathname}?${qs.stringify(router.query)}`;
    }
    return `${router.pathname}`;
  }, [router.query, router.pathname, router.route]);
  return currentUrl;
};
