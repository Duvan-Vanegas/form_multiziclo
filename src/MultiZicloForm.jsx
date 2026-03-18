import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Leaf, Users, Zap, CheckCircle } from 'lucide-react';
import './MultiZicloForm.css';

function MultiZicloForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7; // Paso final es el resumen (Paso 7)
  
  const [formData, setFormData] = useState({
    personasHogar: '',
    consumoElectricidad: '',
    consumeGasNatural: '',
    consumoGas: '',
    poseeVehiculo: '',
    kmDiarios: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Solo permitir números en estos campos de texto
    if (value === '' || /^\d+$/.test(value)) {
      setFormData(prev => ({ ...prev, [name]: value }));
      if (error) setError('');
    }
  };

  const validateStep = () => {
    if (currentStep === 1 && !formData.personasHogar) {
      setError('Por favor, ingresa el número de personas.');
      return false;
    }
    if (currentStep === 2 && !formData.consumoElectricidad) {
      setError('Por favor, ingresa tu consumo eléctrico estimado.');
      return false;
    }
    if (currentStep === 3 && !formData.consumeGasNatural) {
      setError('Por favor, selecciona si consumes gas natural.');
      return false;
    }
    if (currentStep === 4 && !formData.consumoGas) {
      setError('Por favor, ingresa tu consumo de gas natural estimado.');
      return false;
    }
    if (currentStep === 5 && !formData.poseeVehiculo) {
      setError('Por favor, selecciona si posees un vehículo particular.');
      return false;
    }
    if (currentStep === 6 && !formData.kmDiarios) {
      setError('Por favor, ingresa el promedio de km diarios.');
      return false;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      if (currentStep === 3 && formData.consumeGasNatural === 'No') {
        setCurrentStep(5); // Saltar al paso de vehículo si no consume gas
      } else if (currentStep === 5 && formData.poseeVehiculo === 'No') {
        setCurrentStep(7); // Saltar al resumen final si no tiene vehículo
      } else if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    if (currentStep === 7 && formData.poseeVehiculo === 'No') {
      setCurrentStep(5); // Volver a la pregunta de vehículo
      setError('');
    } else if (currentStep === 5 && formData.consumeGasNatural === 'No') {
      setCurrentStep(3); // Volver a la pregunta de gas natural
      setError('');
    } else if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      setError('');
    }
  };

  // Renderizar la pregunta según el paso actual
  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <div className="question-block" key="step1">
            <h2 className="question-title">¿Cuántas personas viven en tu hogar?</h2>
            
            <div className="input-group">
              <div className="wizard-input-wrapper">
                <input 
                  type="text" 
                  inputMode="numeric"
                  name="personasHogar"
                  className="wizard-input" 
                  placeholder="Ej. 3"
                  value={formData.personasHogar}
                  onChange={handleChange}
                  autoFocus
                />
                <span className="input-addon">personas</span>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="question-block" key="step2">
            <h2 className="question-title">¿Cuál es el consumo mensual de electricidad de tu hogar?</h2>
            
            <div className="input-group">
              <div className="wizard-input-wrapper">
                <input 
                  type="text" 
                  inputMode="numeric"
                  name="consumoElectricidad"
                  className="wizard-input" 
                  placeholder="Ej. 150"
                  value={formData.consumoElectricidad}
                  onChange={handleChange}
                  autoFocus
                />
                <span className="input-addon">kW/h</span>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="question-block" key="step3">
            <h2 className="question-title">¿Consumes gas natural en tu hogar?</h2>
            
            <div className="input-group" style={{ maxWidth: '450px' }}>
              <div className="options-grid">
                <button 
                  className={`option-btn ${formData.consumeGasNatural === 'Sí' ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, consumeGasNatural: 'Sí' }));
                    setError('');
                  }}
                >
                  Sí
                </button>
                <button 
                  className={`option-btn ${formData.consumeGasNatural === 'No' ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, consumeGasNatural: 'No' }));
                    setError('');
                  }}
                >
                  No
                </button>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="question-block" key="step4">
            <h2 className="question-title">¿Cuál es el consumo mensual de gas natural en tu hogar?</h2>
            
            <div className="input-group">
              <div className="wizard-input-wrapper">
                <input 
                  type="text" 
                  inputMode="numeric"
                  name="consumoGas"
                  className="wizard-input" 
                  placeholder="Ej. 15"
                  value={formData.consumoGas}
                  onChange={handleChange}
                  autoFocus
                />
                <span className="input-addon">m³</span>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="question-block" key="step5">
            <h2 className="question-title">¿Posees vehículo particular?</h2>
            
            <div className="input-group" style={{ maxWidth: '450px' }}>
              <div className="options-grid">
                <button 
                  className={`option-btn ${formData.poseeVehiculo === 'Sí' ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, poseeVehiculo: 'Sí' }));
                    setError('');
                  }}
                >
                  Sí
                </button>
                <button 
                  className={`option-btn ${formData.poseeVehiculo === 'No' ? 'selected' : ''}`}
                  onClick={() => {
                    setFormData(prev => ({ ...prev, poseeVehiculo: 'No' }));
                    setError('');
                  }}
                >
                  No
                </button>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="question-block" key="step6">
            <h2 className="question-title">¿Qué km recorres en promedio diario?</h2>
            
            <div className="input-group">
              <div className="wizard-input-wrapper">
                <input 
                  type="text" 
                  inputMode="numeric"
                  name="kmDiarios"
                  className="wizard-input" 
                  placeholder="Ej. 20"
                  value={formData.kmDiarios}
                  onChange={handleChange}
                  autoFocus
                />
                <span className="input-addon">km</span>
              </div>
              {error && <p className="error-text">{error}</p>}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="question-block" key="step7" style={{ textAlign: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
              <div style={{ background: 'var(--color-sage)', color: 'var(--color-primary)', padding: '1.5rem', borderRadius: '50%' }}>
                <CheckCircle size={64} />
              </div>
            </div>
            <h2 className="question-title">¡Cálculo Completado!</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
              Hemos recopilado tus datos. Aquí podremos mostrar tu huella ecológica estimada basada en tu consumo.
            </p>
            <div style={{ background: 'rgba(255,255,255,0.7)', padding: '2rem', borderRadius: '16px', boxShadow: 'var(--shadow-soft)', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Resumen</h3>
              <p style={{ marginTop: '1rem', fontSize: '1.1rem' }}>Personas: <strong>{formData.personasHogar}</strong></p>
              <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Electricidad: <strong>{formData.consumoElectricidad} kW/h</strong></p>
              <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Gas Natural: <strong>{formData.consumeGasNatural === 'Sí' ? `${formData.consumoGas} m³` : 'No consume'}</strong></p>
              <p style={{ marginTop: '0.5rem', fontSize: '1.1rem' }}>Vehículo: <strong>{formData.poseeVehiculo === 'Sí' ? `${formData.kmDiarios} km diarios` : 'No posee'}</strong></p>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="wizard-container">
      
      {/* Encabezado fijo superior */}
      <header className="wizard-header">
        <div className="wizard-header-logo">
          <Leaf size={24} strokeWidth={2.5} />
        </div>
        <span className="wizard-header-title">Impacto Ambiental</span>
      </header>

      {/* Contenido Central Flotante */}
      <main className="wizard-content-area">
        {renderStep()}
      </main>

      {/* Controles de Navegación */}
      <div className="nav-container">
        <button 
          className="nav-button nav-prev" 
          onClick={prevStep} 
          style={{ display: currentStep > 1 ? 'flex' : 'none' }}
          aria-label="Pregunta anterior"
        >
          <ArrowLeft size={32} strokeWidth={2.5} />
        </button>
        
        <button 
          className="nav-button nav-next" 
          onClick={nextStep}
          style={{ display: currentStep < totalSteps ? 'flex' : 'none' }}
          aria-label="Siguiente pregunta"
        >
          <ArrowRight size={32} strokeWidth={2.5} />
        </button>
      </div>

      {/* Footer corporativo / informativo */}
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-info">
            <Leaf size={16} className="footer-icon" />
            <span>Pequeñas acciones generan un gran impacto. Reduce tu huella ecológica hoy.</span>
          </div>
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Impacto Ambiental. Reservados todos los derechos.
          </div>
        </div>
      </footer>
      
    </div>
  );
}

export default MultiZicloForm;
