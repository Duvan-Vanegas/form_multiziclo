import React, { useState, useEffect } from 'react';
import Header from '../components/Wizard/Header.jsx';
import Footer from '../components/Wizard/Footer.jsx';
import NavButtons from '../components/Wizard/NavButtons.jsx';
import StepRenderer from '../components/Wizard/StepRenderer.jsx';

const HomePage = () => {
  const [currentStep, setCurrentStep] = useState(() => {
    const saved = localStorage.getItem('multiziclo_step');
    return saved ? parseInt(saved, 10) : 1;
  });
  
  const totalSteps = 21;
  
  const [formData, setFormData] = useState(() => {
    const defaultData = {
      primerNombre: '',
      segundoNombre: '',
      primerApellido: '',
      segundoApellido: '',
      identificacion: '',
      cargo: '',
      personasHogar: '',
      consumoElectricidad: '',
      consumeGasNatural: '',
      consumoGas: '',
      poseeVehiculo: '',
      kmDiarios: '',
      recicla: '',
      composta: '',
      viajesAvion: '',
      consumoCarne: '',
      horasAire: '',
      horasPC: '',
      horasCelular: '',
      pedidosDomicilio: ''
    };
    const saved = localStorage.getItem('multiziclo_data');
    if (!saved) return defaultData;
    // Merge saved data with defaults to ensure new fields are present
    return { ...defaultData, ...JSON.parse(saved) };
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('multiziclo_step', currentStep.toString());
    localStorage.setItem('multiziclo_data', JSON.stringify(formData));
  }, [currentStep, formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (currentStep <= 6) {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (error) setError('');
    } else {
      if (value === '' || /^\d*\.?\d*$/.test(value)) {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (error) setError('');
      }
    }
  };

  const validateStep = () => {
    // Helper to get string safely
    const getVal = (key) => (formData[key] || '').toString();

    const validations = {
      1: { condition: !getVal('primerNombre').trim(), message: 'Ingresa tu primer nombre.' },
      2: { condition: false, message: '' }, 
      3: { condition: !getVal('primerApellido').trim(), message: 'Ingresa tu primer apellido.' },
      4: { condition: false, message: '' }, 
      5: { condition: !getVal('identificacion').trim(), message: 'Ingresa tu número de identificación.' },
      6: { condition: !getVal('cargo').trim(), message: 'Ingresa tu cargo en la organización.' },
      7: { condition: !getVal('personasHogar').trim(), message: 'Ingresa el número de personas para continuar.' },
      8: { condition: !getVal('consumoElectricidad').trim(), message: 'Necesitamos conocer tu consumo mensual de luz.' },
      9: { condition: !getVal('consumeGasNatural').trim(), message: 'Por favor, selecciona una opción.' },
      10: { condition: getVal('consumeGasNatural') === 'Sí' && !getVal('consumoGas').trim(), message: 'Ingresa tu consumo de gas.' },
      11: { condition: !getVal('poseeVehiculo').trim(), message: 'Selecciona si tienes vehículo.' },
      12: { condition: getVal('poseeVehiculo') === 'Sí' && !getVal('kmDiarios').trim(), message: 'Indica los kilómetros que recorres.' },
      13: { condition: !getVal('recicla').trim(), message: 'Completa esta pregunta para avanzar.' },
      14: { condition: !getVal('composta').trim(), message: 'Dinos si realizas compostaje.' },
      15: { condition: !getVal('viajesAvion').trim(), message: 'Ingresa el número de viajes al año.' },
      16: { condition: !getVal('consumoCarne').trim(), message: 'Indica tu consumo de carne promedio.' },
      17: { condition: !getVal('horasAire').trim(), message: 'Ingresa el uso de aire acondicionado.' },
      18: { condition: !getVal('horasPC').trim(), message: 'Indica las horas de uso del computador.' },
      19: { condition: !getVal('horasCelular').trim(), message: 'Indica las horas de uso del celular.' },
      20: { condition: !getVal('pedidosDomicilio').trim(), message: 'Completa este último dato para finalizar.' },
    };

    const stepValidation = validations[currentStep];
    if (stepValidation && stepValidation.condition) {
      setError(stepValidation.message);
      return false;
    }
    setError('');
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep === 9 && formData.consumeGasNatural === 'No') {
        setCurrentStep(11);
      } else if (currentStep === 11 && formData.poseeVehiculo === 'No') {
        setCurrentStep(13);
      } else if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep === 13 && formData.poseeVehiculo === 'No') {
      setCurrentStep(11);
    } else if (currentStep === 11 && formData.consumeGasNatural === 'No') {
      setCurrentStep(9);
    } else if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
    setError('');
  };

  const handleFinalSubmit = () => {
    localStorage.removeItem('multiziclo_step');
    localStorage.removeItem('multiziclo_data');
    setIsSuccess(true);
  };

  return (
    <div className="h-screen flex flex-col relative overflow-hidden bg-slate-50">
      <Header currentStep={isSuccess ? totalSteps : currentStep} totalSteps={totalSteps} />

      <main className="flex-1 overflow-y-auto relative z-10 w-full flex flex-col items-center pt-4 pb-20 scrollbar-hidden">
        <div className="w-full max-w-4xl flex-1 flex items-center justify-center p-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <StepRenderer 
            currentStep={currentStep}
            formData={formData}
            error={error}
            isSuccess={isSuccess}
            handleChange={handleChange}
            updateFormData={(data) => {
              setFormData(prev => ({ ...prev, ...data }));
              setError('');
            }}
            setError={setError}
            handleNext={nextStep}
            onSubmit={handleFinalSubmit}
          />
        </div>
      </main>

      {!isSuccess && (
        <div className="relative z-20 w-full max-w-4xl mx-auto px-6 pb-4">
          <NavButtons 
            currentStep={currentStep}
            totalSteps={totalSteps}
            onPrev={prevStep}
            onNext={nextStep}
          />
        </div>
      )}

      <Footer onOpenLogo={() => setIsModalOpen(true)} />

      {/* Global Logo Modal Overlay - POPUP STYLE */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/10 h-[100dvh] w-full p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative bg-white/90 backdrop-blur-2xl p-10 md:p-16 rounded-[3rem] border border-white/40 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] max-w-[95vw] md:max-w-[80vw] max-h-[85vh] flex items-center justify-center animate-in zoom-in-95 duration-500 ease-out"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-8 right-8 text-slate-400 hover:text-slate-600 hover:rotate-90 transition-all duration-300"
              onClick={() => setIsModalOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
            
            <img 
              src="/src/assets/Multiziclo-sostenibilidad-a-su-alcance3.png" 
              alt="MultiZiclo Logo Full" 
              className="w-full h-auto max-h-[60vh] object-contain select-none"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
