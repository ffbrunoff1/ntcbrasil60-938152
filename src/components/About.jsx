import { motion } from 'framer-motion';
import { Target, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 20, transition: { duration: 0.6 } },
  };

  const features = [
    {
      icon: Target,
      title: 'Compromisso',
      description:
        'Entregamos projetos pontuais com rigor técnico e foco total nas necessidades do cliente.',
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description:
        'Utilizamos tecnologias e materiais de ponta para garantir construções eficientes e duradouras.',
    },
    {
      icon: Award,
      title: 'Qualidade Superior',
      description:
        'Nossa paixão pela excelência se reflete em cada detalhe, do planejamento à execução final.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-primary">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <span className="text-secondary font-semibold">Quem Somos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-6">
              Excelência e Tradição na Arte de Construir
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              A NTC Brasil atua no setor de construção, oferecendo soluções
              completas e serviços personalizados para atender às necessidades
              específicas de cada cliente. Com uma equipe experiente e dedicada,
              transformamos ideias em realidade, sempre com o máximo de
              profissionalismo e transparência.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                >
                  <div className="flex-shrink-0 bg-secondary/10 text-secondary p-3 rounded-full">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-text-dark">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="w-full h-full min-h-[400px] bg-gray-100 rounded-2xl flex items-center justify-center p-8 shadow-lg"
            variants={itemVariants}
          >
            <img
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/5241b3d1-38cb-4039-b903-afef638cb123/constrution-project.webp"
              alt="Equipe de construção trabalhando em um projeto"
              className="w-full h-auto object-cover rounded-lg shadow-strong"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
