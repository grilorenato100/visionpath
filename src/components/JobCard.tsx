import { MapPin, DollarSign, BarChart3, Clock, Sparkles } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  match: number;
  company: string;
  description: string;
  location: string;
  salary: string;
  level: string;
  type: string;
  tags: string[];
  isHighlighted?: boolean;
}

export function JobCard({ job }: { job: Job }) {
  return (
    <div 
      className={`card border-2 transition-all ${
        job.isHighlighted 
          ? 'border-brand-purple ring-1 ring-brand-purple/20' 
          : 'border-zinc-800'
      }`}
      id={`job-card-${job.id}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-white tracking-tight">{job.title}</h3>
            <span className="bg-match-green text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
              {job.match}% Match
            </span>
          </div>
          <p className="text-zinc-500 font-medium flex items-center gap-2">
            <div className="w-5 h-5 bg-zinc-800 rounded flex items-center justify-center">
               <span className="text-[10px] text-zinc-400">🏢</span>
            </div>
            {job.company}
          </p>
        </div>
      </div>

      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
        {job.description}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-zinc-500 text-sm">
        <div className="flex items-center gap-2">
          <MapPin size={16} />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-2">
          <DollarSign size={16} />
          <span>{job.salary}</span>
        </div>
        <div className="flex items-center gap-2">
          <BarChart3 size={16} />
          <span>{job.level}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{job.type}</span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <p className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mb-2">Habilidades Requeridas:</p>
          <div className="flex flex-wrap gap-2">
            {job.tags.map(tag => (
              <span key={tag} className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full border border-zinc-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <button className="btn-primary" id={`btn-candidatar-${job.id}`}>
          Candidatar-se
        </button>
      </div>
    </div>
  );
}
