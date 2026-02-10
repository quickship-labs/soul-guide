import { themes, openingReflections, mainReflections, prayerClosings } from '@/data/devotional-parts';
import { getVerseOfDay } from '@/data/bible-verses';
import AdSense from '@/components/AdSense';

function getDayIndex(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

export default function DevotionalPage() {
  const today = new Date();
  const dayIndex = getDayIndex(today);

  const theme = themes[dayIndex % themes.length];
  const opening = openingReflections[dayIndex % openingReflections.length];
  const reflection = mainReflections[dayIndex % mainReflections.length];
  const prayer = prayerClosings[dayIndex % prayerClosings.length];
  const verse = getVerseOfDay(today);

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-indigo-600 font-medium text-sm uppercase tracking-wider mb-2">
          Daily Devotional
        </p>
        <h1 className="text-4xl font-bold text-indigo-900 mb-3">{theme}</h1>
        <p className="text-gray-500">{formattedDate}</p>
      </div>

      <AdSense />

      {/* Devotional Content */}
      <div className="space-y-8">
        {/* Opening Reflection */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            Opening Reflection
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{opening}</p>
        </section>

        {/* Scripture */}
        <section className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl shadow-sm border border-indigo-100 p-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            Scripture Reading
          </h2>
          <blockquote className="text-gray-700 text-xl italic leading-relaxed mb-3">
            &ldquo;{verse.text}&rdquo;
          </blockquote>
          <cite className="text-indigo-700 font-semibold text-lg not-italic block">
            {verse.reference}
          </cite>
        </section>

        {/* Main Reflection */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            Reflection
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg">{reflection}</p>
        </section>

        <AdSense />

        {/* Prayer */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-sm border border-purple-100 p-8">
          <h2 className="text-xl font-semibold text-indigo-800 mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-sm font-bold">4</span>
            Closing Prayer
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg italic">{prayer}</p>
        </section>
      </div>

      {/* Footer note */}
      <div className="mt-10 text-center text-sm text-gray-500">
        <p>A new devotional is available every day. Come back tomorrow for fresh inspiration.</p>
      </div>

      <AdSense />
    </div>
  );
}
