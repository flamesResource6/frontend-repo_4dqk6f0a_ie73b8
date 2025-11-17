import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-36 sm:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Applied AI that survives the real world.
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-2xl">
              We build computer vision, voice AI, and automation systems for factories, logistics, and emergency services — designed to ship and stay running.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition">
                Book a call
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 text-white hover:bg-white/20 transition">
                View projects
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-8 opacity-80">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="h-8 w-24 rounded bg-white/5 border border-white/10" />
              ))}
            </div>
          </div>
          <div className="h-[440px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
