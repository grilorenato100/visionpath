import { Link, useLocation } from 'react-router-dom';
import { Sparkles, HelpCircle, LogOut } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="bg-black border-b border-zinc-800 px-8 py-4 flex items-center justify-between sticky top-0 z-50" id="main-navigation">
      <div className="flex items-center gap-12">
        <Link to="/form" className="flex items-center gap-2" id="nav-logo">
          <div className="text-brand-purple">
            <Sparkles size={28} strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold text-white tracking-tight">VisionPath</span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/form"
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentPath === '/form'
                ? 'bg-brand-purple text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
            id="nav-link-formulario"
          >
            Formulário
          </Link>
          <Link
            to="/jobs"
            className={`px-6 py-2 rounded-lg font-medium transition-all ${
              currentPath === '/jobs'
                ? 'bg-brand-purple text-white'
                : 'text-zinc-400 hover:text-white'
            }`}
            id="nav-link-vagas"
          >
            Vagas
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-8 text-zinc-400">
        <button className="flex items-center gap-2 hover:text-white transition-colors" id="btn-suporte">
          <HelpCircle size={20} />
          <span>Suporte</span>
        </button>
        <Link to="/" className="flex items-center gap-2 hover:text-white transition-colors" id="btn-sair">
          <LogOut size={20} />
          <span>Sair</span>
        </Link>
      </div>
    </nav>
  );
}
