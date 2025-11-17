import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Deliverables from '../components/Deliverables';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <main>
        <Hero />
        <Deliverables />
      </main>
      <footer className="border-t border-white/10 mt-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-gray-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Xentralia</span>
          <div className="flex gap-6">
            <a className="hover:text-white" href="#">Privacy</a>
            <a className="hover:text-white" href="#">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
