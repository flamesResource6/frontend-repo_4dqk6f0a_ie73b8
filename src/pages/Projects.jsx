import Navbar from '../components/Navbar';
import { PROJECTS, CATEGORIES } from '../data/projects';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = useMemo(() =>
    PROJECTS.filter(p => filter === 'All' ? true : p.category === filter), [filter]
  );

  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <main className="pt-28 pb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h1 className="text-3xl font-extrabold">Projects</h1>
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full border text-sm ${filter === cat ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-transparent' : 'bg-white/5 border-white/10'} hover:bg-white/10`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <article key={p.slug} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 flex flex-col">
              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-white/10 mb-4" />
              <h3 className="text-xl font-bold">{p.name}</h3>
              <p className="text-gray-300 text-sm mt-2 flex-1">{p.tagline}</p>
              <div className="mt-3 flex gap-2 flex-wrap">
                {p.tags.map(t => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-200">{t}</span>
                ))}
              </div>
              <Link to={`/projects/${p.slug}`} className="mt-5 inline-flex items-center justify-center px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm">
                View details
              </Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
