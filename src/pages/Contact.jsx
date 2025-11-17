import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0B0D12] text-white">
      <Navbar />
      <main className="pt-28 pb-20 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold">Tell us what you want to build.</h1>
        <p className="text-gray-300 mt-3">We usually respond within 1–2 business days.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Full name" name="name" />
            <Input label="Company" name="company" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Email" name="email" type="email" />
            <Input label="Role" name="role" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Select label="Project type" name="type" options={[
              'Quick prototype', 'Production system', 'Advisory/consulting']}
            />
            <Select label="Budget range" name="budget" options={[
              'Under $10k', '$10k–$30k', '$30k–$75k', '$75k–$150k', '$150k+']}
            />
          </div>
          <Textarea label="Project description" name="description" rows={6} />
          <button type="submit" className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 transition">
            Send message
          </button>
        </form>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-xl font-bold">Prefer email or a quick call?</h2>
          <p className="text-gray-300 mt-2 text-sm">Email us at contact@xentralia.ai or book a call.</p>
          <div className="mt-4 flex gap-3">
            <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm" href="mailto:contact@xentralia.ai">Email us</a>
            <a className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-sm" href="#">Book a call</a>
          </div>
        </div>
      </main>
    </div>
  );
}

function Input({ label, name, type = 'text' }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-300">{label}</span>
      <input name={name} type={type} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
    </label>
  );
}

function Select({ label, name, options }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-300">{label}</span>
      <select name={name} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500">
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

function Textarea({ label, name, rows = 4 }) {
  return (
    <label className="block">
      <span className="text-sm text-gray-300">{label}</span>
      <textarea name={name} rows={rows} className="mt-1 w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500" />
    </label>
  );
}
