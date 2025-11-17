import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 shadow-lg shadow-cyan-500/30" />
          <span className="text-white font-semibold tracking-wide">Xentralia</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { to: '/', label: 'Home' },
            { to: '/solutions', label: 'Solutions' },
            { to: '/projects', label: 'Projects' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => `text-gray-300 hover:text-white transition-colors ${isActive ? 'text-white' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button className="md:hidden p-2 rounded-lg bg-white/10 text-white">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
