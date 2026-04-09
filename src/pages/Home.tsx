import { motion } from 'motion/react';
import { ArrowRight, Shield, Target, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/fondo1inicio.png"
            alt="ASEPOL Background"
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
              Líderes en Formación Policial y Seguridad Privada
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight tracking-tighter mb-8">
              FORJAMOS <span className="text-yellow-500 italic">EL ÉXITO</span> DE TU FUTURO.
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Más de 20 años de experiencia preparando a los futuros Mossos d'Esquadra, Guardia Urbana y profesionales de la seguridad privada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/cursos"
                className="group bg-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center hover:bg-yellow-400 transition-all"
              >
                VER OPOSICIONES
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                to="/nosotros"
                className="px-8 py-4 rounded-full font-bold text-lg text-white border border-white/20 hover:bg-white/10 transition-all text-center"
              >
                CONÓCENOS
              </Link>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Stats Section */}
      <section className="bg-black py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Años de Experiencia', value: '20+' },
              { label: 'Alumnos Formados', value: '5000+' },
              { label: 'Tasa de Aprobado', value: '92%' },
              { label: 'Instructores Expertos', value: '12' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center lg:text-left"
              >
                <p className="text-4xl font-black text-white mb-1">{stat.value}</p>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
              ¿POR QUÉ ELEGIR <span className="text-yellow-500">ASEPOL</span>?
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-10 h-10 text-yellow-500" />,
                title: 'EXPERIENCIA REAL',
                desc: 'Nuestros instructores son profesionales en activo con décadas de servicio en cuerpos policiales.',
              },
              {
                icon: <Target className="w-10 h-10 text-yellow-500" />,
                title: 'METODOLOGÍA ÉXITO',
                desc: 'Temarios actualizados y simulacros de examen constantes para garantizar tu plaza.',
              },
              {
                icon: <Award className="w-10 h-10 text-yellow-500" />,
                title: 'CERTIFICACIÓN OFICIAL',
                desc: 'Centro homologado para formación de seguridad privada y especializaciones tácticas.',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-black border border-white/5 rounded-3xl hover:border-yellow-500/50 transition-all"
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-widest">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter">
                FORMACIÓN <span className="text-yellow-500 italic">ESPECIALIZADA</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Explora nuestra amplia gama de cursos diseñados para profesionales y civiles.
              </p>
            </div>
            <Link 
              to="/cursos" 
              className="text-yellow-500 font-bold uppercase tracking-widest flex items-center hover:translate-x-2 transition-transform"
            >
              VER TODOS LOS CURSOS <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Oposiciones",
                desc: "Mossos d'Esquadra, Policía Local y Guardia Urbana.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Seguridad Privada",
                desc: "Vigilancia, escolta y protección de instalaciones.",
                icon: <Shield className="w-6 h-6" />
              },
              {
                title: "Defensa Personal",
                desc: "Técnicas de autoprotección y control de riesgos.",
                icon: <Target className="w-6 h-6" />
              }
            ].map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 bg-zinc-900 rounded-3xl border border-white/5 hover:border-yellow-500/30 transition-all"
              >
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center text-yellow-500 mb-6 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{course.desc}</p>
                <Link to="/cursos" className="text-xs font-bold text-yellow-500 uppercase tracking-widest flex items-center">
                  MÁS INFORMACIÓN <ArrowRight className="ml-1 w-3 h-3" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter">
            ¿LISTO PARA DAR EL PASO?
          </h2>
          <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto font-medium">
            Únete a la próxima promoción y conviértete en el profesional que siempre has querido ser.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-black text-white px-12 py-5 rounded-full font-bold text-xl hover:scale-105 transition-transform shadow-2xl"
          >
            SOLICITAR INFORMACIÓN
          </Link>
        </div>
      </section>
    </div>
  );
}
