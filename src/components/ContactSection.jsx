import React, { useState } from 'react';
import AnimateDiscrete from './AnimateDiscrete';

const ContactInfoIcon = ({ Icon }) => (
  <div className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
    {Icon}
  </div>
);

const FormInput = ({ label, id, ...props }) => (
  <div className="flex flex-col space-y-1">
    <label htmlFor={id} className="text-sm font-medium text-blue-950">{label}</label>
    <input
      id={id}
      className="border border-gray-200 rounded-md p-3 focus:ring-1 focus:ring-orange-300 focus:border-orange-300 transition outline-none"
      {...props}
    />
  </div>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', company: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const dataToSend = {
      access_key: "SUA_CHAVE_ACCESS_KEY_AQUI",
      name: formData.name,
      subject: `Novo contato de ${formData.name} (${formData.company})`,
      email: formData.email,
      message: `Empresa: ${formData.company}\nE-mail: ${formData.email}\n\nMensagem:\n${formData.message}`,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(dataToSend)
      });
      const result = await response.json();
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white min-h-screen">
      
      {/* Bloco CSS Injetado: Translação Horizontal Fluida Exclusiva em Tons de Azul */}
      <style>{`
        @keyframes waterHorizontalAnime {
          0% { transform: translateX(0%); }
          50% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .water-horizontal-bg {
          animation: waterHorizontalAnime 8s ease-in-out infinite !important;
        }
      `}</style>

      {/* 1. Hero / Header Banner */}
      <div className="relative overflow-hidden text-white text-center py-44 px-4 w-full">
        
        {/* Fita Estendida na Horizontal com Movimento de Ondulação */}
        <div 
          className="absolute inset-0 w-[300%] h-full water-horizontal-bg pointer-events-none"
          style={{
            // Gradiente suave apenas com a transição entre os dois tons de azul da empresa
            backgroundImage: 'linear-gradient(to right, #00095C 0%, #1B00BE 25%, #00095C 50%, #1B00BE 75%, #00095C 100%)'
          }}
        />

        {/* Overlay escuro sutil para garantir leitura perfeita do texto */}
        <div className="absolute inset-0 bg-black/5 pointer-events-none z-1" />

        <AnimateDiscrete className="relative z-10">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl font-extrabold mb-5 drop-shadow-sm">Vamos conversar</h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto drop-shadow-sm">
              Conte-nos sobre o seu desafio. Retornaremos em até 24 horas úteis.
            </p>
          </div>
        </AnimateDiscrete>
      </div>

      {/* 2. Main Content Section (Info and Form) */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Contact Information */}
          <AnimateDiscrete className="flex flex-col space-y-12">
            <div className="flex items-center space-x-6">
              <ContactInfoIcon Icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>} />
              <div>
                <h4 className="text-lg font-semibold text-blue-950">Telefone / WhatsApp</h4>
                <p className="text-gray-600"><a href="tel:24988372037" className="hover:text-blue-700 transition">24 98837-2037</a></p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <ContactInfoIcon Icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>} />
              <div>
                <h4 className="text-lg font-semibold text-blue-950">E-mail</h4>
                <p className="text-gray-600"><a href="mailto:contato@eticajr.com.br" className="hover:text-blue-700 transition">contato@eticajr.com.br</a></p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <ContactInfoIcon Icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>} />
              <div>
                <h4 className="text-lg font-semibold text-blue-950">Endereço</h4>
                <p className="text-gray-600 max-w-sm">UERJ Resende — Rod. Presidente Dutra, Resende/RJ</p>
              </div>
            </div>
          </AnimateDiscrete>

          {/* Right Column: Contact Form */}
          <AnimateDiscrete className="delay-500">
            <div className="bg-white p-10 rounded-xl shadow-lg border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormInput id="name" label="Nome" type="text" value={formData.name} onChange={handleChange} placeholder="Seu nome completo" required />
                  <FormInput id="company" label="Empresa" type="text" value={formData.company} onChange={handleChange} placeholder="Nome da sua empresa" required />
                </div>

                <FormInput id="email" label="E-mail" type="email" value={formData.email} onChange={handleChange} placeholder="Seu e-mail corporativo" required />

                <div className="flex flex-col space-y-1">
                  <label htmlFor="message" className="text-sm font-medium text-blue-950">Como podemos ajudar?</label>
                  <textarea
                    id="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Escreva aqui..."
                    className="border border-gray-200 rounded-md p-3 focus:ring-1 focus:ring-orange-300 focus:border-orange-300 transition outline-none resize-y"
                  />
                </div>

                {submitStatus === 'success' && <p className="text-green-600 text-sm font-medium">✓ Mensagem enviada com sucesso!</p>}
                {submitStatus === 'error' && <p className="text-red-600 text-sm font-medium">❌ Ocorreu um erro ao enviar.</p>}

                <button
                  type="submit" disabled={isSubmitting}
                  className="w-full bg-orange-400 hover:bg-orange-500 disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-md transition duration-200 flex items-center justify-center space-x-2 group"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar mensagem'}</span>
                  {!isSubmitting && <span className="transform group-hover:translate-x-1 transition-transform">🚀</span>}
                </button>
              </form>
            </div>
          </AnimateDiscrete>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;