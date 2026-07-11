import React from 'react';

/**
 * Um componente discreto que envolve seu conteúdo com uma animação de fade-in.
 * 
 * @param {object} props
 * @param {React.ReactNode} props.children O conteúdo a ser animado.
 * @param {string} [props.className] Classes adicionais do Tailwind para layout.
 */
const AnimateDiscrete = ({ children, className = '' }) => {
  return (
    // Esta div é que recebe a classe de animação que definimos no tailwind.config.js
    <div className={`animate-discrete-fade-in ${className}`}>
      {children}
    </div>
  );
};

export default AnimateDiscrete;