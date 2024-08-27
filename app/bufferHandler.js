// app/globalLoadingHandler.js
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLoading } from './context/loadingContext';

export default function GlobalLoadingHandler() {
  const { setLoading } = useLoading();
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    // Check if router.events is defined
    if (router && router.events) {
      router.events.on('routeChangeStart', handleStart);
      router.events.on('routeChangeComplete', handleComplete);
      router.events.on('routeChangeError', handleComplete);

      return () => {
        router.events.off('routeChangeStart', handleStart);
        router.events.off('routeChangeComplete', handleComplete);
        router.events.off('routeChangeError', handleComplete);
      };
    }
  }, []);

  return null;
}
