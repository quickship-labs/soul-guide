'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/lib/config';

export default function AdSense() {
  useEffect(() => {
    if (!siteConfig.adsensePublisherId) return;
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
    } catch {
      // AdSense not loaded
    }
  }, []);

  if (!siteConfig.adsensePublisherId) return null;

  return (
    <div className="my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={siteConfig.adsensePublisherId}
        data-ad-slot="auto"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
