import Link from 'next/link';
import { cities } from '@/data/prayer-cities';
import AdSense from '@/components/AdSense';

function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export default function PrayerTimesPage() {
  // Group cities by region
  const regions: Record<string, typeof cities> = {};
  cities.forEach((city) => {
    const region = city.country;
    if (!regions[region]) regions[region] = [];
    regions[region].push(city);
  });

  const sortedCountries = Object.keys(regions).sort();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-900 mb-4">
          Prayer Times by City
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Find accurate daily prayer times for over 50 cities worldwide. Times are calculated
          based on geographic coordinates and updated every day.
        </p>
      </div>

      <AdSense />

      {/* Cities by Country */}
      <div className="space-y-8">
        {sortedCountries.map((country) => (
          <div key={country}>
            <h2 className="text-xl font-semibold text-indigo-800 mb-3 border-b border-indigo-100 pb-2">
              {country}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {regions[country].map((city) => (
                <Link
                  key={city.name}
                  href={`/prayer-times/${slugify(city.name)}`}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 hover:shadow-md hover:border-indigo-200 transition-all group"
                >
                  <h3 className="font-medium text-indigo-900 group-hover:text-indigo-700 transition-colors">
                    {city.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {city.lat.toFixed(2)}&deg;N, {city.lng.toFixed(2)}&deg;E
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AdSense />
    </div>
  );
}
