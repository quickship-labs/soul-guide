import Link from 'next/link';
import { topics } from '@/data/bible-verses';
import AdSense from '@/components/AdSense';

const topicEmojis: Record<string, string> = {
  love: '\u{2764}\u{FE0F}',
  faith: '\u{1F64F}',
  hope: '\u{1F31F}',
  strength: '\u{1F4AA}',
  peace: '\u{1F54A}\u{FE0F}',
  forgiveness: '\u{1F49C}',
  gratitude: '\u{1F64C}',
  courage: '\u{1F981}',
  wisdom: '\u{1F4A1}',
  comfort: '\u{1F917}',
  healing: '\u{1FA7A}',
  joy: '\u{1F604}',
  patience: '\u{23F3}',
  protection: '\u{1F6E1}\u{FE0F}',
  guidance: '\u{1F9ED}',
};

export default function BibleVersesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Bible Verses by Topic
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore over 200 inspiring Bible verses organized by 15 topics. Find the perfect scripture
          for encouragement, comfort, and spiritual growth.
        </p>
      </div>

      <AdSense />

      {/* Topic Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {topics.map((topic) => (
          <Link
            key={topic}
            href={`/bible-verses/${topic}`}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 text-center group hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">{topicEmojis[topic] || '\u{1F4D6}'}</div>
            <h2 className="text-lg font-semibold text-indigo-900 capitalize group-hover:text-indigo-700 transition-colors">
              {topic}
            </h2>
          </Link>
        ))}
      </div>

      <AdSense />
    </div>
  );
}
