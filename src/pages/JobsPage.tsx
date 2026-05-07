import { Brain, Sparkles } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { JobCard } from '../components/JobCard';
import { motion } from 'motion/react';

const MOCK_JOBS = [
  {
    id: '1',
    title: 'Profissional de analise de dados Pleno',
    match: 95,
    company: 'TechVision Inovação',
    description: 'Oportunidade alinhada ao seu perfil de engenharia com foco em analse de dados. Valorizamos profissionais com sua formação em unso.',
    location: 'Remoto',
    salary: 'R$ 12.000 - R$ 18.000',
    level: 'Pleno',
    type: 'CLT',
    tags: ['python'],
    isHighlighted: true
  },
  {
    id: '2',
    title: 'Especialista em engenharia',
    match: 88,
    company: 'DataPath Analytics',
    description: 'Profissional com superior-cursando para atuar em projetos estratégicos. Experiência em analse de dados será um diferencial.',
    location: 'Remoto',
    salary: 'R$ 8.000 - R$ 12.000',
    level: 'Pleno',
    type: 'CLT',
    tags: []
  },
  {
    id: '3',
    title: 'Coordenador de analise de dados',
    match: 92,
    company: 'Innovation Labs',
    description: 'Desenvolvimento de soluções inovadoras. Buscamos profissionais formados em unso ou instituições similares.',
    location: 'Remoto',
    salary: 'R$ 12.000 - R$ 20.000',
    level: 'Sênior',
    type: 'CLT',
    tags: ['python']
  }
];

export default function JobsPage() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <main className="max-w-5xl mx-auto py-12 px-6">
        <header className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Vagas Recomendadas</h1>
            <p className="text-zinc-500 font-medium">{MOCK_JOBS.length * 2} oportunidades encontradas baseadas no seu perfil</p>
          </div>
          <div className="bg-brand-purple/10 border border-brand-purple/30 rounded-lg p-2.5 flex items-center gap-2 text-brand-purple">
             <Brain size={20} />
             <span className="text-xs font-bold uppercase tracking-widest">IA</span>
          </div>
        </header>

        {/* Summary Bar */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl px-8 py-5 flex items-center justify-between text-sm mb-12 shadow-2xl" id="profile-summary">
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Nome:</span>
              <span className="text-white font-medium">Renato Pereira do Nascimento</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Formação:</span>
              <span className="text-white font-medium">superior-cursando em engenharia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Experiência:</span>
              <span className="text-white font-medium">3-5</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Região:</span>
              <span className="text-white font-medium">remoto</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Pretensão:</span>
              <span className="text-white font-medium">12k-20k</span>
            </div>
          </div>
        </section>

        <div className="space-y-8">
          {MOCK_JOBS.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </div>
      </main>

       {/* Floating ? Button */}
       <button className="fixed bottom-6 right-6 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors border border-zinc-700">
        <span className="text-lg font-bold">?</span>
      </button>
    </div>
  );
}
