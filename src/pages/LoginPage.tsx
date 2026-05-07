import { Sparkles, Mail, Lock, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../components/ui/Input';
import { motion } from 'motion/react';
import { type FormEvent } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate('/form');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
      {/* Logo Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <div className="text-brand-purple">
            <Sparkles size={48} strokeWidth={2.5} />
          </div>
          <h1 className="text-5xl font-bold text-white tracking-tight">VisionPath</h1>
        </div>
        <p className="text-zinc-400 text-lg">Encontre sua carreira ideal com IA</p>
      </motion.div>

      {/* Login Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="card w-full max-w-md"
        id="login-card"
      >
        <h2 className="text-2xl font-bold text-white mb-1">Bem-vindo</h2>
        <p className="text-zinc-500 mb-8">Faça login para continuar</p>

        <form onSubmit={handleLogin} className="space-y-6">
          <Input 
            label="E-mail"
            icon={<Mail size={18} />}
            placeholder="exemplo@gmail.com"
            type="email"
            id="email-input"
            required
          />

          <Input 
            label="Senha"
            icon={<Lock size={18} />}
            placeholder="Digite sua senha"
            type="password"
            id="password-input"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400 cursor-pointer group">
              <div className="w-5 h-5 border border-zinc-700 rounded bg-dark-input flex items-center justify-center group-hover:border-zinc-500 transition-colors">
                <Check size={14} className="text-brand-purple opacity-0" />
              </div>
              <input type="checkbox" className="hidden" id="remember-me" />
              Lembrar-me
            </label>
            <button type="button" className="text-brand-purple hover:text-brand-purple-hover font-medium transition-colors" id="forgot-password">
              Esqueceu a senha?
            </button>
          </div>

          <button type="submit" className="btn-primary mt-4" id="btn-login">
            Entrar no VisionPath
          </button>
        </form>

        <p className="text-center mt-10 text-zinc-500 text-sm">
          Não tem uma conta?{' '}
          <button className="text-brand-purple hover:text-brand-purple-hover font-bold transition-colors">
            Cadastre-se gratuitamente
          </button>
        </p>
      </motion.div>

      {/* Footer Terms */}
      <p className="mt-8 text-zinc-600 text-xs text-center" id="terms-footer">
        Ao entrar, você concorda com nossos Termos de Uso e Política de Privacidade
      </p>

      {/* Floating ? Button */}
      <button className="fixed bottom-6 right-6 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors border border-zinc-700">
        <span className="text-lg font-bold">?</span>
      </button>
    </div>
  );
}
