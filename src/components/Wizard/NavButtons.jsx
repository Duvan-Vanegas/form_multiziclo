import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const NavButtons = ({ currentStep, totalSteps, onPrev, onNext }) => {
  return (
    <div className="flex justify-between items-center px-6 md:px-12 py-6 bg-transparent relative z-20 pointer-events-none">
      <div className="flex gap-4 w-full max-w-7xl mx-auto justify-between pointer-events-auto">
        <button 
          onClick={onPrev}
          className={`group flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white text-slate-500 font-semibold border border-slate-200 shadow-sm transition-all duration-300 hover:bg-slate-50 hover:text-emerald-600 hover:border-emerald-200 hover:scale-105 active:scale-95 ${currentStep === 1 ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          aria-label="Anterior"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="hidden md:inline">Anterior</span>
        </button>
        
        <button 
          onClick={onNext}
          className={`group flex items-center gap-2 px-8 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold border border-emerald-500 shadow-lg shadow-emerald-500/10 transition-all duration-300 hover:bg-emerald-700 hover:scale-105 active:scale-95 ${currentStep === totalSteps ? 'opacity-0 invisible' : 'opacity-100 visible'}`}
          aria-label="Siguiente"
        >
          <span className="hidden md:inline">Siguiente</span>
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
};

export default NavButtons;
