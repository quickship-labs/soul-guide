import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Prayer Times by City - Worldwide Schedule',
    template: '%s | SoulGuide',
  },
};

export default function PrayerTimesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
