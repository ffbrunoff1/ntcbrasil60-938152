import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754005808403_0.png';

  const footerLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#' },
    { icon: Facebook, href: '#' },
    { icon: Linkedin, href: '#' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-dark text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-12"
        >
          <div className="lg:col-span-2">
            <a href="#hero" className="mb-6 inline-block">
              <img
                src={logoUrl}
                alt="NTC Brasil Logo"
                className="h-12 w-auto bg-primary p-2 rounded-md"
              />
            </a>
            <p className="max-w-md text-gray-400">
              Transformando espaços e construindo sonhos com qualidade, inovação
              e compromisso em cada projeto.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-light mb-4 tracking-wider uppercase">
              Navegação
            </h3>
            <ul className="space-y-3">
              {footerLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-secondary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-text-light mb-4 tracking-wider uppercase">
              Conecte-se
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-700/50 hover:bg-secondary p-3 rounded-full transition-colors duration-300"
                  aria-label={`NTC Brasil on ${social.icon.displayName}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-semibold text-text-light">Contato Direto</p>
              <a
                href="tel:+5544991040774"
                className="block text-gray-400 hover:text-secondary"
              >
                +55 44 99104-0774
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-6 py-6 text-center text-sm text-gray-500">
          <p>&copy; {currentYear} NTC Brasil. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
