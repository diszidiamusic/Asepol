import { motion } from 'motion/react';
import { Shield, Target, Zap, CheckCircle2, HeartPulse, Crosshair, Users, Map } from 'lucide-react';

const courses = [
  {
    title: "Oposiciones",
    category: "Cuerpos Policiales",
    desc: "Preparación exhaustiva para cuerpos como Mossos d’Esquadra, Policía Local o Guardia Urbana, con soporte en pruebas físicas, inglés, entrevistas y más.",
    features: ["Mossos d'Esquadra", "Policía Local", "Guardia Urbana", "Pruebas físicas e Inglés"],
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Seguridad Privada",
    category: "Profesional",
    desc: "Formación teórica y práctica en protección de personas, instalaciones, transporte de valores y vigilancia privada.",
    features: ["Protección de personas", "Instalaciones", "Transporte de valores", "Vigilancia privada"],
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Defensa Personal & Autoprotección",
    category: "Táctico",
    desc: "Técnicas de defensa personal, autoprotección y control de situaciones de riesgo para civiles y profesionales.",
    features: ["Control de riesgos", "Técnicas de defensa", "Autoprotección", "Civiles y Profesionales"],
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Manejo de Armas Tácticas y No Letales",
    category: "Táctico",
    desc: "Entrenamiento táctico y uso de armamento para vigilantes, fuerzas de seguridad y profesionales en defensa.",
    features: ["Entrenamiento táctico", "Armas no letales", "Vigilantes", "Fuerzas de seguridad"],
    icon: <Crosshair className="w-8 h-8" />
  },
  {
    title: "CQB - Airsoft",
    category: "Entrenamiento",
    desc: "Entrenamiento táctico y recreativo con réplicas de armas, trabajo en equipo y simulaciones de combate controlado.",
    features: ["Réplicas de armas", "Trabajo en equipo", "Simulaciones", "Combate controlado"],
    icon: <Users className="w-8 h-8" />
  },
  {
    title: "Protección VIPs / Autoridades",
    category: "Especialización",
    desc: "Capacitación especializada en escolta, conducción evasiva y protección integral de autoridades, ejecutivos y VIPs.",
    features: ["Escolta", "Conducción evasiva", "Protección integral", "Autoridades y VIPs"],
    icon: <Shield className="w-8 h-8" />
  },
  {
    title: "Formación Médica",
    category: "Emergencias",
    desc: "Formación en primeros auxilios, atención prehospitalaria y manejo de emergencias para personal civil y de seguridad.",
    features: ["Primeros auxilios", "Atención prehospitalaria", "Emergencias", "Personal civil y seguridad"],
    icon: <HeartPulse className="w-8 h-8" />
  },
  {
    title: "Armas Federativas e Instructor de Tiro",
    category: "Certificación",
    desc: "Instrucción en manejo, mantenimiento y normativa de armas federativas para personal habilitado y fuerzas de seguridad.",
    features: ["Manejo y Mantenimiento", "Normativa", "Instructor de tiro", "Personal habilitado"],
    icon: <Target className="w-8 h-8" />
  },
  {
    title: "Preparacionismo",
    category: "Supervivencia",
    desc: "Formación en supervivencia, gestión de crisis, autosuficiencia y respuesta ante desastres naturales o emergencias.",
    features: ["Supervivencia", "Gestión de crisis", "Autosuficiencia", "Respuesta desastres"],
    icon: <Map className="w-8 h-8" />
  }
];

export default function Courses() {
  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
          >
            Formación de Alto Nivel
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
          >
            NUESTROS <span className="text-yellow-500 italic">CURSOS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Programas diseñados para maximizar tus posibilidades de éxito en las oposiciones y tu desarrollo profesional en seguridad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900 rounded-3xl p-8 border border-white/5 hover:border-yellow-500/30 transition-all flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="p-4 bg-yellow-500/10 rounded-2xl text-yellow-500">
                  {course.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                {course.title}
              </h3>
              
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                {course.desc}
              </p>
              
              <ul className="space-y-3 mb-10 flex-grow">
                {course.features.map((feature) => (
                  <li key={feature} className="flex items-center text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-yellow-500 mr-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full py-4 bg-white/5 hover:bg-yellow-500 hover:text-black text-white font-bold rounded-xl transition-all uppercase tracking-widest text-xs">
                Más Información
              </button>
            </motion.div>
          ))}
        </div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 p-12 bg-yellow-500 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-black text-black mb-2 tracking-tight">¿NO ENCUENTRAS LO QUE BUSCAS?</h2>
            <p className="text-black/70 font-medium">Ofrecemos formación a medida para empresas y grupos.</p>
          </div>
          <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-transform">
            CONSULTAR AHORA
          </button>
        </motion.div>
      </div>
    </div>
  );
}
