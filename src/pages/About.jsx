import Navbar from '../components/Navbar';

const principles = [
  'Real-world first: results on your floor matter more than benchmarks.',
  'Transparent costs: clear scope, infra estimates, and maintenance plans.',
  'Fast iteration: ship small, measure, improve.',
  'Own your stack: we build with maintainability and handover in mind.',
];

const tech = [
  'Python', 'FastAPI', 'Node/TypeScript', 'React', 'OpenCV', 'PyTorch/YOLO', 'Whisper/ASR', 'LLMs', 'AWS', 'GCP', 'Azure'
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">We are builders first.</h1>
          <p className="text-gray-300 mt-4 max-w-3xl">
            Xentralia is an applied AI studio based in Mexico, partnering with teams across Latin America and abroad. We design, build, and run systems that integrate with existing operations and deliver real outcomes.
          </p>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl font-bold">Principles</h2>
          <ul className="mt-4 grid sm:grid-cols-2 gap-4">
            {principles.map((p) => (
              <li key={p} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-gray-300">{p}</li>
            ))}
          </ul>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl font-bold">Team</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Alex M.', role: 'Founder' },
              { name: 'Sara L.', role: 'CTO' },
              { name: 'Diego R.', role: 'ML Engineer' },
              { name: 'María P.', role: 'Full‑stack Engineer' },
              { name: 'Luis T.', role: 'Data Engineer' },
              { name: 'You?', role: 'Partner' },
            ].map(({ name, role }) => (
              <div key={name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600" />
                <h3 className="mt-4 font-semibold">{name}</h3>
                <p className="text-gray-300 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-12">
          <h2 className="text-2xl font-bold">Tech stack</h2>
          <p className="text-gray-300 mt-2 text-sm">We choose the stack based on your constraints, not hype.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map(t => (
              <span key={t} className="px-3 py-1 rounded-full bg-white/10 text-sm">{t}</span>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
