import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-black pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-yellow-500 font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
              Contacto
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8 leading-none">
              HABLEMOS DE <span className="text-yellow-500 italic">TU FUTURO</span>.
            </h1>
            <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
              ¿Tienes dudas sobre las oposiciones o nuestros cursos? Nuestro equipo de asesores está listo para ayudarte.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Llámanos</p>
                  <p className="text-xl font-bold text-white">+34 900 000 000</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Escríbenos</p>
                  <p className="text-xl font-bold text-white">info@asepol.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Visítanos</p>
                  <p className="text-xl font-bold text-white">Barcelona, España</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-zinc-900 rounded-2xl text-yellow-500 group-hover:bg-yellow-500 group-hover:text-black transition-all">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Horario</p>
                  <p className="text-xl font-bold text-white">Lun - Vie: 09:00 - 20:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 p-10 md:p-16 rounded-[3rem] border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Nombre</label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Email</label>
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Asunto</label>
                <select className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 focus:outline-none transition-colors appearance-none">
                  <option>Oposiciones Mossos</option>
                  <option>Oposiciones Guardia Urbana</option>
                  <option>Seguridad Privada</option>
                  <option>Otros cursos</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-2">Mensaje</label>
                <textarea
                  rows={4}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-black border border-white/10 rounded-2xl px-6 py-4 text-white focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-yellow-500 text-black font-black py-5 rounded-2xl flex items-center justify-center space-x-3 hover:bg-yellow-400 transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl">
                <span>ENVIAR MENSAJE</span>
                <Send className="w-5 h-5" />
              </button>

              <p className="text-[10px] text-gray-500 text-center px-4">
                Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos personales.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
