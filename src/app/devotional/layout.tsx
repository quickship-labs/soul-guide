import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Daily Devotional - Spiritual Inspiration',
    template: '%s | SoulGuide',
  },
};

export default function DevotionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
