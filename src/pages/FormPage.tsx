import { Sparkles, GraduationCap, Briefcase, ChevronDown, Target, MapPin, Linkedin, Phone, Languages, Wallet } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Input } from '../components/ui/Input';
import { motion } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { type FormEvent } from 'react';

export default function FormPage() {
  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate('/jobs');
  };

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      <main className="max-w-4xl mx-auto py-12 px-6">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">Encontre Sua Carreira Ideal</h1>
          <p className="text-zinc-500">Preencha o formulário completo e nossa IA encontrará as melhores oportunidades personalizadas para você</p>
        </header>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
          onSubmit={handleSearch}
          id="profile-form"
        >
          {/* Dados Pessoais */}
          <section className="card space-y-6">
            <div className="flex items-center gap-2 text-brand-purple mb-4">
              <Sparkles size={24} />
              <h2 className="text-xl font-bold text-white">Dados Pessoais</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Nome Completo" 
                placeholder="Seu nome completo" 
                id="form-nome"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-300 text-sm font-medium">
                    <span>Idade</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="number" 
                      className="input-field pr-10" 
                      placeholder="Ex: 25" 
                      id="form-idade"
                      required
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-0.5 text-zinc-500">
                      <ChevronDown size={14} className="rotate-180" />
                      <ChevronDown size={14} />
                    </div>
                  </div>
                </div>
                <Input 
                  label="Localização" 
                  placeholder="Cidade - UF" 
                  id="form-localizacao"
                  icon={<MapPin size={18} />}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="WhatsApp / Telefone" 
                placeholder="(00) 00000-0000" 
                id="form-telefone"
                icon={<Phone size={18} />}
              />
              <Input 
                label="LinkedIn (URL)" 
                placeholder="linkedin.com/in/seuuser" 
                id="form-linkedin"
                icon={<Linkedin size={18} />}
              />
            </div>
          </section>

          {/* Formação Acadêmica */}
          <section className="card space-y-6">
            <div className="flex items-center gap-2 text-brand-purple mb-4">
              <GraduationCap size={24} />
              <h2 className="text-xl font-bold text-white">Formação Acadêmica</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <div className="text-zinc-300 text-sm font-medium">Nível de Formação</div>
                 <div className="relative">
                    <select className="input-field appearance-none pr-10 text-zinc-400" id="form-nivel">
                      <option>Selecione o nível</option>
                      <option>Ensino Médio</option>
                      <option>Técnico</option>
                      <option>Graduação</option>
                      <option>Pós-Graduação</option>
                      <option>Mestrado / Doutorado</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                 </div>
              </div>
              <div className="space-y-2">
                 <div className="text-zinc-300 text-sm font-medium">Status da Formação</div>
                 <div className="relative">
                    <select className="input-field appearance-none pr-10 text-zinc-400" id="form-status-formacao">
                      <option>Selecione o status</option>
                      <option>Concluído</option>
                      <option>Cursando</option>
                      <option>Trancado</option>
                      <option>Incompleto</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Curso / Área" placeholder="Ex: Engenharia de Software" id="form-curso" />
              <Input label="Instituição de Ensino" placeholder="Nome da instituição" id="form-instituicao" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Ano de Conclusão / Previsão" placeholder="Ex: 2025" id="form-conclusao" icon={<span className="text-xs">📅</span>} />
              <div className="space-y-2">
                 <div className="text-zinc-300 text-sm font-medium flex items-center gap-2">
                   <Languages size={18} className="text-zinc-500" />
                   <span>Idiomas</span>
                 </div>
                 <div className="relative">
                    <select className="input-field appearance-none pr-10 text-zinc-400" id="form-idiomas">
                      <option>Selecione seu nível de inglês</option>
                      <option>Básico</option>
                      <option>Intermediário</option>
                      <option>Avançado</option>
                      <option>Fluente</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                 </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-zinc-300 text-sm font-medium">Detalhes da Formação Acadêmica</div>
              <textarea 
                className="input-field min-h-[120px] resize-none" 
                placeholder="Descreva sua formação, cursos complementares, certificações..."
                id="form-formacao-detalhes"
              />
            </div>
          </section>

          {/* Experiência Profissional */}
          <section className="card space-y-6">
            <div className="flex items-center gap-2 text-brand-purple mb-4">
              <Briefcase size={24} />
              <h2 className="text-xl font-bold text-white">Experiência Profissional</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Cargo Atual / Último Cargo" 
                placeholder="Ex: Desenvolvedor Front-end" 
                id="form-cargo"
              />
              <Input 
                label="Empresa" 
                placeholder="Nome da última empresa" 
                id="form-empresa"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                 <div className="text-zinc-300 text-sm font-medium">Anos de Experiência</div>
                 <div className="relative">
                    <select className="input-field appearance-none pr-10 text-zinc-400" id="form-exp-anos">
                      <option>Selecione</option>
                      <option>Sem experiência</option>
                      <option>Menos de 1 ano</option>
                      <option>1-3 anos</option>
                      <option>3-5 anos</option>
                      <option>Mais de 5 anos</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                 </div>
              </div>
              <div className="space-y-2">
                 <div className="text-zinc-300 text-sm font-medium">Modalidade Preferida</div>
                 <div className="relative">
                    <select className="input-field appearance-none pr-10 text-zinc-400" id="form-modalidade">
                      <option>Selecione a modalidade</option>
                      <option>Remoto</option>
                      <option>Híbrido</option>
                      <option>Presencial</option>
                      <option>Qualquer uma</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" size={18} />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                label="Área de Interesse" 
                placeholder="Ex: Desenvolvimento, Gestão, Vendas..." 
                id="form-interesse"
                icon={<Target size={18} />}
              />
              <Input 
                label="Pretensão Salarial" 
                placeholder="Ex: R$ 5.000,00" 
                id="form-pretensao"
                icon={<Wallet size={18} />}
              />
            </div>

            <div className="space-y-2">
              <div className="text-zinc-300 text-sm font-medium">Descreva sua Experiência Profissional</div>
              <textarea 
                className="input-field min-h-[120px] resize-none" 
                placeholder="Conte-nos sobre suas experiências anteriores..."
                id="form-exp-detalhes"
              />
            </div>
          </section>

          <button type="submit" className="btn-primary py-4 uppercase tracking-wider text-sm" id="btn-buscar-ia">
            Encontrar Vagas com IA
          </button>
        </motion.form>
      </main>

       {/* Floating ? Button */}
       <button className="fixed bottom-6 right-6 w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors border border-zinc-700">
        <span className="text-lg font-bold">?</span>
      </button>
    </div>
  );
}
