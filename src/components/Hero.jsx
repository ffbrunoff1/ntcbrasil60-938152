import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-secondary"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent opacity-90"></div>
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      ></div>

      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="max-w-4xl text-left text-text-light"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 flex items-center gap-3 text-lg font-semibold bg-accent bg-opacity-30 px-4 py-2 rounded-full w-fit"
          >
            <Building2 size={22} />
            <span>NTC Brasil - Construção Civil</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Transformando Espaços,
            <br />
            <span className="text-text-light opacity-80">Construindo Sonhos.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mb-10 text-primary opacity-90"
          >
            Qualidade e inovação em cada projeto. Nos dedicamos a oferecer
            soluções personalizadas que superam as expectativas e realizam suas
            visões.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary text-secondary font-bold text-lg px-8 py-4 rounded-lg shadow-strong hover:scale-105 transform transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-50"
            >
              Vamos Construir Juntos
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
