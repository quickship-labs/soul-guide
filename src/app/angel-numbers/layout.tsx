import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Angel Numbers Guide - Spiritual Meanings',
    template: '%s | SoulGuide',
  },
};

export default function AngelNumbersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
