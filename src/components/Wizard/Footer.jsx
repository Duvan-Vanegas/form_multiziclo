import React from 'react';
import logoFooter from '../../assets/Multiziclo-sostenibilidad-a-su-alcance3.png';

const Footer = ({ onOpenLogo }) => {
  return (
    <footer className="w-full p-6 bg-white/40 backdrop-blur-2xl border-t border-slate-200/50 z-10 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 max-w-7xl mx-auto px-8">
        {/* Left Spacer for centering */}
        <div className="hidden md:block"></div>
        
        {/* Center Text */}
        <div className="flex flex-col items-center gap-2 text-center order-2 md:order-none">
          <div className="flex items-center gap-3 text-emerald-600 font-semibold text-sm tracking-normal">
            <span>Pequeñas acciones generan un gran impacto.</span>
          </div>
          <div className="text-[10px] md:text-xs text-slate-400 font-medium tracking-normal">
            &copy; {new Date().getFullYear()} MultiZiclo Sostenibilidad a su alcance. Derechos Reservados.
          </div>
        </div>

        {/* Right Logo */}
        <div className="flex justify-center md:justify-end order-1 md:order-none">
          <button 
            onClick={onOpenLogo}
            className="group relative transition-all duration-500"
            aria-label="Ver logo en grande"
          >
            <img 
              src={logoFooter} 
              alt="MultiZiclo Logo Footer" 
              className="h-10 md:h-14 w-auto opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 cursor-zoom-in" 
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
