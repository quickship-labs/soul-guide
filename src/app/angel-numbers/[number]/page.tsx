import { Metadata } from 'next';
import Link from 'next/link';
import { angelNumberList, getAngelNumberByNumber } from '@/data/angel-numbers';
import { generateSEO } from '@/lib/seo';
import AdSense from '@/components/AdSense';

interface PageProps {
  params: Promise<{ number: string }>;
}

export async function generateStaticParams() {
  return angelNumberList.map((number) => ({ number }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { number } = await params;
  const angel = getAngelNumberByNumber(number);
  if (!angel) {
    return generateSEO({
      title: 'Angel Number Not Found',
      description: 'Angel number not found.',
      path: `/angel-numbers/${number}`,
    });
  }
  return generateSEO({
    title: `Angel Number ${angel.number} Meaning - ${angel.meaning}`,
    description: `Discover the spiritual meaning of angel number ${angel.number}. Learn about ${angel.meaning.toLowerCase()} and what this number means for your life.`,
    keywords: [`angel number ${angel.number}`, `${angel.number} meaning`, 'angel numbers', 'spiritual meaning', `${angel.meaning.toLowerCase()}`],
    path: `/angel-numbers/${angel.number}`,
  });
}

export default async function AngelNumberPage({ params }: PageProps) {
  const { number } = await params;
  const angel = getAngelNumberByNumber(number);

  if (!angel) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Angel Number Not Found</h1>
        <p className="text-gray-600 mb-6">We could not find information about this angel number.</p>
        <Link href="/angel-numbers" className="text-indigo-600 hover:text-indigo-800 font-medium">
          &larr; Back to all angel numbers
        </Link>
      </div>
    );
  }

  const relatedNumbers = angelNumberList.filter((n) => n !== number);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/angel-numbers"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
        >
          &larr; All Angel Numbers
        </Link>

        <div className="mt-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 rounded-2xl p-8 text-white text-center">
          <p className="text-indigo-200 text-sm uppercase tracking-wider mb-2">Angel Number</p>
          <h1 className="text-6xl md:text-7xl font-bold mb-3">{angel.number}</h1>
          <p className="text-xl text-indigo-200">{angel.meaning}</p>
        </div>
      </div>

      <AdSense />

      {/* Spiritual Significance */}
      <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">
          Spiritual Significance
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {angel.spiritualSignificance}
        </p>
      </section>

      {/* Guidance */}
      <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 p-8 mb-6">
        <h2 className="text-2xl font-bold text-indigo-900 mb-4">
          Guidance &amp; What To Do
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          {angel.guidance}
        </p>
      </section>

      <AdSense />

      {/* Related Angel Numbers */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Explore More Angel Numbers</h2>
        <div className="flex flex-wrap gap-3">
          {relatedNumbers.map((n) => (
            <Link
              key={n}
              href={`/angel-numbers/${n}`}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
            >
              {n}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
