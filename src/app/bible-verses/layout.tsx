import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Bible Verses by Topic - Find Inspiration',
    template: '%s | SoulGuide',
  },
};

export default function BibleVersesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
