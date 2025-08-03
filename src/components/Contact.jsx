import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, Loader, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const response = await fetch(
        'https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ...formData,
            recipientEmail: 'ffbrunoff@yahoo.com.br',
          }),
        }
      );

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Falha no envio');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: Phone, text: '+55 44 99104-0774', href: 'tel:+5544991040774' },
    {
      icon: Mail,
      text: 'ffbrunoff@yahoo.com.br',
      href: 'mailto:ffbrunoff@yahoo.com.br',
    },
    { icon: MapPin, text: 'Rua Padre Lebret, 801, Bloco 03, G05', href: '#' },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/5">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-text-dark">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Tem um projeto em mente? Adoraríamos ouvir sobre ele. Preencha o
            formulário ou utilize um de nossos canais de contato.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold mb-6 text-text-dark">
              Fale Conosco Diretamente
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-secondary text-text-light p-4 rounded-full group-hover:bg-accent transition-colors duration-300">
                    <item.icon size={24} />
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-accent transition-colors duration-300">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-primary p-8 rounded-2xl shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-secondary focus:border-secondary"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center bg-secondary text-text-light font-bold py-4 px-6 rounded-lg hover:bg-accent transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader className="animate-spin mr-2" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2" /> Enviar Mensagem
                    </>
                  )}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-green-600 flex items-center gap-2">
                  <CheckCircle /> Mensagem enviada com sucesso!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-600">
                  Ocorreu um erro. Tente novamente mais tarde.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
