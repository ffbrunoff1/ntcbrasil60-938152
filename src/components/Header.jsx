import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754005808403_0.png';

  const navLinks = [
    { name: 'Sobre Nós', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const headerVariants = {
    initial: {
      backgroundColor: 'rgba(255, 255, 255, 0)',
      color: '#FFFFFF',
    },
    scrolled: {
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: '#2A648A',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    },
  };

  const mobileMenuVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 },
  };

  const mobileLinkVariant = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial="initial"
      animate={scrolled ? 'scrolled' : 'initial'}
      variants={headerVariants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-50 transition-colors duration-300"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center">
          <img
            src={logoUrl}
            alt="NTC Brasil Logo"
            className="h-10 md:h-12 w-auto"
          />
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="font-semibold text-lg hover:text-secondary transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden md:inline-block px-6 py-3 rounded-lg font-bold transition-all duration-300 ${scrolled ? 'bg-secondary text-primary hover:bg-accent' : 'bg-primary text-secondary hover:bg-opacity-80'}`}
        >
          Fale Conosco
        </a>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariant}
            className="md:hidden bg-primary shadow-lg"
          >
            <nav className="flex flex-col items-center py-8 space-y-6">
              {navLinks.map(link => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={toggleMenu}
                  variants={mobileLinkVariant}
                  className="font-semibold text-xl text-accent hover:text-secondary"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={toggleMenu}
                variants={mobileLinkVariant}
                className="bg-secondary text-primary px-8 py-3 rounded-lg font-bold"
              >
                Fale Conosco
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
