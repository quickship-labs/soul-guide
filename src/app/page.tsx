import Link from 'next/link';
import { getVerseOfDay } from '@/data/bible-verses';
import AdSense from '@/components/AdSense';

const features = [
  {
    title: 'Bible Verses',
    description: 'Explore inspiring scripture organized by 15 topics including love, faith, hope, strength, and more.',
    href: '/bible-verses',
    icon: '\u{1F4D6}',
  },
  {
    title: 'Daily Devotional',
    description: 'Start your day with a fresh devotional featuring scripture, reflection, and prayer.',
    href: '/devotional',
    icon: '\u{1F31F}',
  },
  {
    title: 'Prayer Times',
    description: 'Find accurate prayer times for 50+ cities worldwide, updated daily.',
    href: '/prayer-times',
    icon: '\u{1F54C}',
  },
  {
    title: 'Angel Numbers',
    description: 'Discover the spiritual meanings behind angel numbers from 111 to 1234.',
    href: '/angel-numbers',
    icon: '\u{1F52E}',
  },
];

export default function HomePage() {
  const verseOfDay = getVerseOfDay();

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Daily Spiritual Companion
          </h1>
          <p className="text-lg md:text-xl text-indigo-200 max-w-3xl mx-auto mb-10">
            Free tools to deepen your faith, find inspiration in scripture, stay connected through prayer,
            and explore spiritual guidance every day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bible-verses"
              className="inline-block bg-white text-indigo-900 font-semibold px-8 py-3 rounded-lg hover:bg-indigo-100 transition-colors"
            >
              Explore Bible Verses
            </Link>
            <Link
              href="/devotional"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Today&apos;s Devotional
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Spiritual Tools &amp; Resources
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-indigo-900 mb-2 group-hover:text-indigo-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <AdSense />

      {/* Verse of the Day */}
      <section className="bg-indigo-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-indigo-900 mb-2">Verse of the Day</h2>
          <p className="text-sm text-indigo-600 mb-8">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <blockquote className="bg-white rounded-xl shadow-md p-8 border border-indigo-100">
            <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-4">
              &ldquo;{verseOfDay.text}&rdquo;
            </p>
            <cite className="text-indigo-700 font-semibold text-lg not-italic">
              {verseOfDay.reference}
            </cite>
            <div className="mt-4">
              <Link
                href={`/bible-verses/${verseOfDay.topic}`}
                className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                More verses about {verseOfDay.topic} &rarr;
              </Link>
            </div>
          </blockquote>
        </div>
      </section>

      <AdSense />
    </>
  );
}
