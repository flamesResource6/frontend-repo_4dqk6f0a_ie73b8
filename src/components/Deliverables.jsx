import { Gauge, ShieldCheck, Radar } from 'lucide-react';

const items = [
  {
    title: 'Faster inspections',
    icon: Gauge,
    desc: 'Deploy CV pipelines that cut manual checks and speed up throughput without sacrificing accuracy.',
  },
  {
    title: 'Fewer errors',
    icon: ShieldCheck,
    desc: 'Use models and validation layers to reduce manual entry mistakes and missed incidents.',
  },
  {
    title: 'Real-time visibility',
    icon: Radar,
    desc: 'Stream metrics into dashboards so operators can act on live signals, not yesterday’s reports.',
  },
];

export default function Deliverables() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">What we deliver</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-gray-300 mt-2 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
