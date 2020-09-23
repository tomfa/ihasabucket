import qs from 'querystring';
import { NextRouter, useRouter } from 'next/router';
import { useMemo } from 'react';

export const getDomain = () => {
  if (window && window.location) {
    return (
      window.location.origin ||
      `${window.location.protocol}//${window.location.hostname}`
    );
  }
  // TODO: Config this part
  return 'https://ihasabucket.it';
};

export const useCurrentUrl = (includeDomain = false) => {
  const router: NextRouter = useRouter();
  const currentUrl = useMemo(() => {
    const relativeUrl = router.query
      ? `${router.pathname}?${qs.stringify(router.query)}`
      : router.pathname;
    if (!includeDomain) {
      return relativeUrl;
    }
    return `${getDomain()}${relativeUrl}`;
  }, [router.query, router.pathname, router.route]);
  return currentUrl;
};
