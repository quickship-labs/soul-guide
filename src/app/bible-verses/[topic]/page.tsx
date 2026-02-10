import { Metadata } from 'next';
import Link from 'next/link';
import { topics, getVersesByTopic } from '@/data/bible-verses';
import { generateSEO } from '@/lib/seo';
import AdSense from '@/components/AdSense';

interface PageProps {
  params: Promise<{ topic: string }>;
}

export async function generateStaticParams() {
  return topics.map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic } = await params;
  const capitalized = topic.charAt(0).toUpperCase() + topic.slice(1);
  return generateSEO({
    title: `Bible Verses About ${capitalized} - Inspiring Scripture`,
    description: `Discover powerful Bible verses about ${topic}. Find inspiration, comfort, and guidance through scripture focused on ${topic}.`,
    keywords: [`bible verses about ${topic}`, `${topic} scripture`, `${topic} bible quotes`, 'bible verses', 'scripture'],
    path: `/bible-verses/${topic}`,
  });
}

export default async function TopicPage({ params }: PageProps) {
  const { topic } = await params;
  const verses = getVersesByTopic(topic);
  const capitalized = topic.charAt(0).toUpperCase() + topic.slice(1);
  const relatedTopics = topics.filter((t) => t !== topic);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/bible-verses"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
        >
          &larr; All Topics
        </Link>
        <h1 className="text-4xl font-bold text-indigo-900 mt-4 mb-2">
          Bible Verses About {capitalized}
        </h1>
        <p className="text-gray-600">
          {verses.length} inspiring scripture passages about {topic} to strengthen your faith.
        </p>
      </div>

      <AdSense />

      {/* Verses */}
      <div className="space-y-6">
        {verses.map((verse, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-3">
              &ldquo;{verse.text}&rdquo;
            </blockquote>
            <div className="flex items-center justify-between">
              <cite className="text-indigo-700 font-semibold not-italic">
                {verse.reference}
              </cite>
              <div className="flex gap-2">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${verse.text}" - ${verse.reference}`)}&url=${encodeURIComponent('https://soulguide.vercel.app/bible-verses/' + topic)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  Share on X
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(`"${verse.text}" - ${verse.reference}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full hover:bg-indigo-200 transition-colors"
                >
                  Share on Facebook
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <AdSense />

      {/* Related Topics */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Explore More Topics</h2>
        <div className="flex flex-wrap gap-3">
          {relatedTopics.map((t) => (
            <Link
              key={t}
              href={`/bible-verses/${t}`}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors capitalize"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
