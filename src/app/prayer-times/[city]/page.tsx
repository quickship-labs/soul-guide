import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/data/prayer-cities';
import { generateSEO } from '@/lib/seo';
import AdSense from '@/components/AdSense';

interface PageProps {
  params: Promise<{ city: string }>;
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

function findCity(slug: string) {
  return cities.find((c) => slugify(c.name) === slug);
}

export async function generateStaticParams() {
  return cities.map((city) => ({ city: slugify(city.name) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = findCity(citySlug);
  if (!city) {
    return generateSEO({
      title: 'City Not Found',
      description: 'Prayer times city not found.',
      path: `/prayer-times/${citySlug}`,
    });
  }
  return generateSEO({
    title: `Prayer Times in ${city.name}, ${city.country} - Today's Schedule`,
    description: `Find today's accurate prayer times for ${city.name}, ${city.country}. Fajr, Sunrise, Dhuhr, Asr, Maghrib, and Isha times updated daily.`,
    keywords: [`prayer times ${city.name}`, `${city.name} prayer schedule`, 'salah times', 'namaz times', `${city.country} prayer times`],
    path: `/prayer-times/${citySlug}`,
  });
}

/**
 * Simple solar calculation for prayer times based on latitude and day of year.
 * This uses approximation formulas for demonstration purposes.
 */
function calculatePrayerTimes(lat: number, lng: number, date: Date) {
  const dayOfYear = Math.floor(
    (date.getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000
  );

  // Solar declination approximation
  const declination = -23.45 * Math.cos((360 / 365) * (dayOfYear + 10) * (Math.PI / 180));

  // Equation of time approximation (minutes)
  const B = ((360 / 365) * (dayOfYear - 81)) * (Math.PI / 180);
  const equationOfTime = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);

  // Solar noon in UTC hours
  const solarNoon = 12 - (lng / 15) - (equationOfTime / 60);

  // Convert degrees to radians
  const latRad = lat * (Math.PI / 180);
  const decRad = declination * (Math.PI / 180);

  // Hour angle for a given angle below horizon
  function hourAngle(angle: number): number {
    const angleRad = angle * (Math.PI / 180);
    const cosH = (Math.sin(angleRad) - Math.sin(latRad) * Math.sin(decRad)) /
                 (Math.cos(latRad) * Math.cos(decRad));
    if (cosH > 1) return 0;
    if (cosH < -1) return 12;
    return (Math.acos(cosH) * 180 / Math.PI) / 15;
  }

  // Sunrise/Sunset: sun at -0.833 degrees
  const sunriseHA = hourAngle(-0.833);

  // Fajr: sun at -18 degrees (astronomical twilight)
  const fajrHA = hourAngle(-18);

  // Isha: sun at -17 degrees
  const ishaHA = hourAngle(-17);

  // Asr: shadow length equals object height + noon shadow
  // Using Hanafi school approximation: shadow = 2x object height
  const asrAngle = Math.atan(1 / (1 + Math.tan(Math.abs(latRad - decRad)))) * (180 / Math.PI);
  const asrHA = hourAngle(asrAngle);

  const fajr = solarNoon - fajrHA;
  const sunrise = solarNoon - sunriseHA;
  const dhuhr = solarNoon + 0.0167; // slight offset after solar noon
  const asr = solarNoon + asrHA;
  const maghrib = solarNoon + sunriseHA;
  const isha = solarNoon + ishaHA;

  function formatTime(hours: number): string {
    // Normalize to 0-24
    let h = ((hours % 24) + 24) % 24;
    const minutes = Math.round((h - Math.floor(h)) * 60);
    h = Math.floor(h);
    if (minutes === 60) {
      h += 1;
      return `${String(h % 24).padStart(2, '0')}:00`;
    }
    return `${String(h % 24).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  }

  return {
    fajr: formatTime(fajr),
    sunrise: formatTime(sunrise),
    dhuhr: formatTime(dhuhr),
    asr: formatTime(asr),
    maghrib: formatTime(maghrib),
    isha: formatTime(isha),
  };
}

export default async function CityPrayerTimesPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = findCity(citySlug);

  if (!city) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">City Not Found</h1>
        <p className="text-gray-600 mb-6">We could not find prayer times for this city.</p>
        <Link href="/prayer-times" className="text-indigo-600 hover:text-indigo-800 font-medium">
          &larr; Back to all cities
        </Link>
      </div>
    );
  }

  const today = new Date();
  const prayerTimes = calculatePrayerTimes(city.lat, city.lng, today);

  const formattedDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const prayers = [
    { name: 'Fajr', time: prayerTimes.fajr, description: 'Pre-dawn prayer' },
    { name: 'Sunrise', time: prayerTimes.sunrise, description: 'Sun rises above horizon' },
    { name: 'Dhuhr', time: prayerTimes.dhuhr, description: 'Midday prayer' },
    { name: 'Asr', time: prayerTimes.asr, description: 'Afternoon prayer' },
    { name: 'Maghrib', time: prayerTimes.maghrib, description: 'Sunset prayer' },
    { name: 'Isha', time: prayerTimes.isha, description: 'Night prayer' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/prayer-times"
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
        >
          &larr; All Cities
        </Link>
        <h1 className="text-4xl font-bold text-indigo-900 mt-4 mb-2">
          Prayer Times in {city.name}
        </h1>
        <p className="text-gray-600">
          {city.country} &middot; {formattedDate}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Coordinates: {city.lat.toFixed(4)}&deg;N, {city.lng.toFixed(4)}&deg;E
        </p>
      </div>

      <AdSense />

      {/* Prayer Times Table */}
      <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-indigo-900 text-white">
              <th className="text-left px-6 py-4 text-sm font-semibold">Prayer</th>
              <th className="text-left px-6 py-4 text-sm font-semibold">Time (UTC)</th>
              <th className="text-left px-6 py-4 text-sm font-semibold hidden sm:table-cell">Description</th>
            </tr>
          </thead>
          <tbody>
            {prayers.map((prayer, index) => (
              <tr
                key={prayer.name}
                className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="px-6 py-4">
                  <span className="font-semibold text-indigo-900">{prayer.name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-lg font-mono text-gray-800">{prayer.time}</span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500 hidden sm:table-cell">
                  {prayer.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-gray-400 text-center">
        Times shown in UTC. Prayer times are approximations based on solar calculations and may vary slightly
        from official local sources.
      </p>

      <AdSense />

      {/* Other Cities */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-indigo-900 mb-6">Other Cities</h2>
        <div className="flex flex-wrap gap-3">
          {cities
            .filter((c) => c.name !== city.name)
            .slice(0, 12)
            .map((c) => (
              <Link
                key={c.name}
                href={`/prayer-times/${slugify(c.name)}`}
                className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition-colors"
              >
                {c.name}
              </Link>
            ))}
          <Link
            href="/prayer-times"
            className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            View all cities &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
