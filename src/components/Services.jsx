import { motion } from 'framer-motion';
import { Home, Building, Wrench } from 'lucide-react';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const services = [
    {
      icon: Home,
      title: 'Construção Residencial',
      description:
        'Projetamos e construímos residências que combinam conforto, design e funcionalidade, transformando o sonho da casa própria em realidade.',
    },
    {
      icon: Building,
      title: 'Projetos Comerciais',
      description:
        'Desenvolvemos espaços comerciais e corporativos otimizados para o seu negócio, focando em eficiência, estética e impacto no mercado.',
    },
    {
      icon: Wrench,
      title: 'Reformas e Renovações',
      description:
        'Modernizamos e revitalizamos ambientes existentes, valorizando seu imóvel com soluções inteligentes e acabamentos de alta qualidade.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-secondary font-semibold">Nossas Soluções</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark mt-2 mb-4">
            Serviços Especializados para Cada Necessidade
          </h2>
          <p className="text-lg text-gray-600">
            Da fundação ao acabamento final, oferecemos um portfólio completo de
            serviços para garantir o sucesso do seu empreendimento.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-primary p-8 rounded-2xl shadow-lg hover:shadow-strong transition-shadow duration-300"
              variants={cardVariants}
            >
              <div className="flex-shrink-0 bg-secondary text-primary w-16 h-16 flex items-center justify-center rounded-full mb-6">
                <service.icon className="w-8 h-8" />
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-text-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <div className="mt-auto pt-6">
                <a
                  href="#contact"
                  className="font-bold text-secondary hover:text-accent transition-colors duration-300"
                >
                  Saiba Mais &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
