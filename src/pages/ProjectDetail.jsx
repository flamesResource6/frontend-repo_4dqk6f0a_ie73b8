import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0B0D12] text-white">
        <Navbar />
        <main className="pt-28 mx-auto max-w-3xl px-4">
          <h1 className="text-2xl font-bold">Project not found</h1>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <main className="pt-28 pb-20">
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold">{project.name}</h1>
          <p className="text-gray-300 mt-3 max-w-3xl">{project.tagline}</p>
        </section>
        <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">The problem</h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.problem}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">Our solution</h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.solution}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">Tech stack</h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.tech}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-bold">Impact</h2>
            <p className="text-gray-300 mt-2 text-sm leading-relaxed">{project.impact}</p>
          </div>
        </section>
      </main>
    </div>
  );
}
