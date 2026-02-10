import Link from 'next/link';
import { angelNumbers } from '@/data/angel-numbers';
import AdSense from '@/components/AdSense';

export default function AngelNumbersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Angel Numbers Guide
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the spiritual meanings behind angel numbers. Learn what the universe is
          trying to tell you when you see these repeating number sequences.
        </p>
      </div>

      <AdSense />

      {/* Angel Numbers Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {angelNumbers.map((angel) => (
          <Link
            key={angel.number}
            href={`/angel-numbers/${angel.number}`}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 border border-gray-100 group hover:-translate-y-1"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-800 transition-colors">
              {angel.number}
            </div>
            <h2 className="text-lg font-semibold text-indigo-900 mb-2">
              {angel.meaning}
            </h2>
            <p className="text-gray-600 text-sm line-clamp-3">
              {angel.spiritualSignificance.substring(0, 150)}...
            </p>
            <span className="inline-block mt-3 text-indigo-600 text-sm font-medium group-hover:text-indigo-800 transition-colors">
              Read more &rarr;
            </span>
          </Link>
        ))}
      </div>

      <AdSense />
    </div>
  );
}
