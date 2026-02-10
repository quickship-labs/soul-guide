import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-3">SoulGuide</h3>
            <p className="text-sm text-indigo-300">
              Your daily spiritual companion. Free tools and resources for faith, prayer, and spiritual growth.
            </p>
          </div>

          {/* Bible Verses */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Bible Verses</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/bible-verses" className="hover:text-white transition-colors">All Topics</Link></li>
              <li><Link href="/bible-verses/love" className="hover:text-white transition-colors">Love</Link></li>
              <li><Link href="/bible-verses/faith" className="hover:text-white transition-colors">Faith</Link></li>
              <li><Link href="/bible-verses/hope" className="hover:text-white transition-colors">Hope</Link></li>
              <li><Link href="/bible-verses/strength" className="hover:text-white transition-colors">Strength</Link></li>
            </ul>
          </div>

          {/* Spiritual Tools */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Spiritual Tools</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/devotional" className="hover:text-white transition-colors">Daily Devotional</Link></li>
              <li><Link href="/prayer-times" className="hover:text-white transition-colors">Prayer Times</Link></li>
              <li><Link href="/angel-numbers" className="hover:text-white transition-colors">Angel Numbers</Link></li>
            </ul>
          </div>

          {/* Angel Numbers */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Angel Numbers</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/angel-numbers/111" className="hover:text-white transition-colors">111 - New Beginnings</Link></li>
              <li><Link href="/angel-numbers/444" className="hover:text-white transition-colors">444 - Angelic Presence</Link></li>
              <li><Link href="/angel-numbers/777" className="hover:text-white transition-colors">777 - Divine Luck</Link></li>
              <li><Link href="/angel-numbers/1111" className="hover:text-white transition-colors">1111 - Awakening</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-indigo-800 text-center text-sm text-indigo-400">
          <p>&copy; {new Date().getFullYear()} SoulGuide. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
