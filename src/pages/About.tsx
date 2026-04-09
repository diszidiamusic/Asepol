import { motion } from 'motion/react';
import { Shield, Award, Users, Target, Zap, Heart, BookOpen, UserCheck } from 'lucide-react';

const instructors = [
  {
    name: 'Antonio González',
    role: 'Director de la Academia',
    desc: 'Docente de seguridad pública, seguridad privada y ámbito civil con más de 20 años de experiencia.',
    image: '/instructor antonio.png'
  },
  {
    name: 'Robert Monzonis Gómez',
    role: 'Instructor de armas combinadas',
    desc: 'Graduado en Psicología y Criminología.',
    image: '/instructor robert.png'
  },
  {
    name: 'Raúl Poza',
    role: 'Instructor de grappling y artes marciales',
    desc: 'Cinturón Negro Segundo grado en Brazilian Jiu jitsu otorgado por Yan Cabral.',
    image: '/instructor raul.png'
  },
  {
    name: 'Boaz Villacorte',
    role: 'CQB y Defensa Personal',
    desc: 'Actualmente en el sector de la seguridad privada como vigilante de seguridad en el transporte público de Barcelona.',
    image: '/instructor boaz.png'
  },
  {
    name: 'José Manuel García',
    role: 'Instructor de defensa personal policial y espray pimienta',
    desc: 'Vigilante de seguridad y escolta con 15 años en el sector de la seguridad.',
    image: '/instructor jose manuel.png'
  },
  {
    name: 'Gerard González',
    role: 'Instructor espray de pimienta y experto en auto protección en robos',
    desc: 'Especialista en tácticas de autoprotección urbana.',
    image: '/instructor gerard gonzalez.png'
  },
  {
    name: 'Guillem Casamayor',
    role: 'Instructor espray de pimienta y experto en auto protección en robos',
    desc: 'Experto en seguridad ciudadana y prevención.',
    image: '/instructor guillem.png'
  },
  {
    name: 'Eliana Guerrero',
    role: 'Instructor espray de pimienta y experto en auto protección en robos',
    desc: 'Formadora especializada en defensa personal femenina y táctica.',
    image: '/instructor aliena guerrero.png'
  },
  {
    name: 'Marta Baena Rojo',
    role: 'Profesora de Inglés',
    desc: 'Especializada en terminología policial y preparación para exámenes oficiales.',
    image: '/instructor marta baeno.png'
  },
  {
    name: 'Meritxell Reinoso',
    role: 'Instructora Soporte vital básico+ DEA',
    desc: 'Enfermera especializada en emergencias y primeros auxilios tácticos.',
    image: '/instructor meritxell.png'
  },
  {
    name: 'Joan Sala',
    role: 'Instructor de Preparacionismo y supervivencia',
    desc: 'Experto en técnicas de supervivencia en entornos hostiles.',
    image: '/instructor joan sala.png'
  },
  {
    name: 'Félix Collada',
    role: 'Instructor medicina táctica',
    desc: 'Especialista en atención sanitaria en combate y entornos de alto riesgo.',
    image: '/instructor felix.png'
  }
];

export default function About() {
  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Sobre Nosotros
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 uppercase">
              Acerca de <span className="text-yellow-500 italic">Nosotros</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              ASEPOL es una empresa privada que se dedica a la formación de fuerzas y cuerpos de seguridad y a seguridad privada, vigilantes, escoltas y controladores de accesos.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-yellow-500 mb-3 uppercase tracking-wider">¿Qué ofrecemos?</h3>
                <p className="text-gray-400 leading-relaxed">
                  Ofrecemos certificados de profesionalidad de vigilantes de seguridad con doble titulación ya sea escolta o vigilante de explosivos, preparación en oposiciones para las fuerzas y cuerpos de seguridad, cursos en defensa personal policial, espray de pimienta, primeros auxilios, preparacionismo.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-yellow-500 mb-3 uppercase tracking-wider">¿Es sólo para profesionales?</h3>
                <p className="text-gray-400 leading-relaxed">
                  También nos dedicamos a formar a la población civil en estos ámbitos. ASEPOL cuanta con los mejores docentes de Cataluña, con amplia experiencia en la docencia.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="aspect-square bg-zinc-900 rounded-[4rem] overflow-hidden border border-white/10">
              <img
                src="/fondo1inicio.png"
                alt="ASEPOL Academy"
                className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-yellow-500 p-8 rounded-3xl shadow-2xl">
              <Shield className="w-12 h-12 text-black" />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 border-y border-white/10 py-16">
          {[
            { label: 'Gente', value: '100' },
            { label: 'Armas', value: '2348' },
            { label: 'Años', value: '25 K' },
            { label: 'Premios', value: '256' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-5xl font-black text-white mb-2">{stat.value}</p>
              <p className="text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Values Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Nuestra Filosofía</span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">¿Qué <span className="text-yellow-500 italic">ofrecemos</span>?</h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-yellow-500" />,
                title: 'Seguridad y responsabilidad',
                desc: 'Enseñamos a proteger sin agredir, priorizando siempre la seguridad propia y de los demás.'
              },
              {
                icon: <Target className="w-8 h-8 text-yellow-500" />,
                title: 'Disciplina',
                desc: 'Fomentamos el rigor y el autocontrol en cada una de nuestras formaciones.'
              },
              {
                icon: <Award className="w-8 h-8 text-yellow-500" />,
                title: 'Profesionalidad',
                desc: 'Excelencia técnica y ética en el desempeño de las funciones de seguridad.'
              },
              {
                icon: <Heart className="w-8 h-8 text-yellow-500" />,
                title: 'Respeto y Ética',
                desc: 'Valores fundamentales para el trato con la ciudadanía y compañeros.'
              },
              {
                icon: <Users className="w-8 h-8 text-yellow-500" />,
                title: 'Inclusividad',
                desc: 'Formación abierta a todos los colectivos con igualdad de oportunidades.'
              },
              {
                icon: <BookOpen className="w-8 h-8 text-yellow-500" />,
                title: 'Aprendizaje continuo',
                desc: 'Actualización constante de tácticas y normativas vigentes.'
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: 'Trabajo en equipo',
                desc: 'La unión hace la fuerza en situaciones de riesgo y operativa diaria.'
              },
              {
                icon: <UserCheck className="w-8 h-8 text-yellow-500" />,
                title: 'Excelencia Docente',
                desc: 'Contamos con los mejores docentes de Cataluña con amplia experiencia.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 border border-white/5 mb-32">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-8">
              "NUESTRA VISIÓN ES SER EL <span className="text-yellow-500">ESCUDO</span> QUE PROTEGE TU CARRERA PROFESIONAL."
            </h2>
            <p className="text-gray-400 text-lg italic">
              — Antonio González, Director de ASEPOL
            </p>
          </div>
        </div>

        {/* Instructors Section */}
        <div id="instructores">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block"
            >
              Élite de Formación
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6"
            >
              NUESTROS <span className="text-yellow-500 italic">INSTRUCTORES</span>
            </motion.h2>
            <div className="w-20 h-1 bg-yellow-500 mx-auto mb-8" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {instructors.map((instructor, i) => (
              <motion.div
                key={instructor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -10 }}
                className="group relative bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 hover:border-yellow-500/30 transition-all"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-500 transition-colors">
                    {instructor.name}
                  </h3>
                  <p className="text-yellow-500 text-xs font-bold uppercase tracking-widest mb-4">
                    {instructor.role}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {instructor.desc}
                  </p>
                </div>
                <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-500/10 rounded-bl-3xl border-b border-l border-white/10 group-hover:bg-yellow-500/20 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
