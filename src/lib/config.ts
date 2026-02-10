export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'SoulGuide',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://soulguide.vercel.app',
  description: 'Free spiritual tools: Bible verse finder, daily devotionals, prayer times, angel numbers, religious holiday calendar, and more.',
  adsensePublisherId: process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || '',
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '',
};
