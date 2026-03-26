import React from 'react';
import logoMultiziclo from '../../assets/Multiziclo-sostenibilidad-a-su-alcance1-1536x342.png';
import logoFalckEmi from '../../assets/falcklatam_logoemifalck.svg';

const Header = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <header className="relative w-full z-30 flex flex-col bg-transparent">
      <div className="p-6 md:p-8 flex items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 transition-all duration-500">
          <img 
            src={logoMultiziclo} 
            alt="MultiZiclo Logo" 
            className="h-[36px] md:h-[48px] w-auto transition-all duration-500" 
          />
          <div className="h-8 w-[1px] bg-slate-200 hidden md:block" />
          <img 
            src={logoFalckEmi} 
            alt="Falck EMI Logo" 
            className="h-[34px] md:h-[45px] w-auto transition-all duration-500" 
          />
        </div>
      </div>
      
      {/* Progress Bar Container */}
      <div className="w-full h-1 bg-slate-100 overflow-hidden relative">
        <div 
          className="h-full bg-emerald-600 transition-all duration-1000 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </header>
  );
};

export default Header;
