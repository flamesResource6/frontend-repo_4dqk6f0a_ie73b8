import Navbar from '../components/Navbar';
import { Brain, MicVocal, BarChart3 } from 'lucide-react';

const solutions = [
  {
    title: 'Computer Vision for Industry',
    icon: Brain,
    desc: 'Detection, counting, quality checks, and OCR tuned for production. Designed for messy lighting, fast motion, and real-world constraints.',
  },
  {
    title: 'Voice & Language AI',
    icon: MicVocal,
    desc: 'Streaming transcription, triage, and assistants for operators. Extract entities, classify intents, and integrate with existing systems.',
  },
  {
    title: 'Automation & Analytics',
    icon: BarChart3,
    desc: 'Dashboards, ETL, and automation for repetitive workflows. From data collection to reporting with auditability in mind.',
  },
];

const steps = [
  {
    title: 'Discover',
    desc: 'We map constraints, data availability, and success metrics. Clear scope before code.',
  },
  {
    title: 'Prototype',
    desc: 'We build a focused proof that runs on your data and environment. Fast iteration and honest results.',
  },
  {
    title: 'Deploy & Iterate',
    desc: 'Ship to production with monitoring and feedback loops. Improve with real usage.',
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">What we build</h1>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {solutions.map(({ title, icon: Icon, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-white font-semibold text-lg">{title}</h3>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
          <h2 className="text-2xl font-bold">How we work</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map(({ title, desc }, i) => (
              <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-cyan-500 text-white flex items-center justify-center text-sm font-bold">{i+1}</div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-gray-300 mt-2 text-sm leading-relaxed">{desc}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
