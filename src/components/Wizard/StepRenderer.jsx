import React from 'react';
import { 
  CheckCircle, Users, Zap, Flame, Car, 
  Recycle, Sprout, Plane, 
  Beef, Wind, Monitor, Smartphone, 
  ShoppingBag, BarChart3, Info,
  Send, ArrowRight, User, IdCard, Briefcase,
  TreePine, BadgeDollarSign, Heart, Leaf, CircleDollarSign
} from 'lucide-react';

const StepRenderer = ({ currentStep, formData, error, isSuccess, handleChange, updateFormData, setError, handleNext, onSubmit }) => {
  const handleSelect = (data) => {
    updateFormData(data);
    setError('');
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto animate-in fade-in zoom-in duration-700">
        {/* Footprint Result Hero */}
        <div className="bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2.5rem] p-8 md:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.05)] text-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Leaf size={32} />
          </div>
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.2em] mb-4">Resultado del Diagnóstico</h2>
          <div className="flex flex-col items-center gap-1 mb-6">
            <span className="text-5xl md:text-7xl font-bold text-slate-800 tracking-tight">36.79</span>
            <span className="text-xl md:text-2xl font-semibold text-slate-400">toneladas de CO₂e</span>
          </div>
          <p className="text-slate-500 font-medium text-sm md:text-base mb-8 italic">
            (= 36,792 kg de CO₂e anuales)
          </p>
          
          <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-emerald-600">
              <TreePine size={24} />
            </div>
            <p className="text-emerald-700 font-semibold text-sm md:text-base max-w-xs text-center md:text-left leading-relaxed">
              Para compensar completamente tu impacto, se necesitarían aproximadamente <span className="text-emerald-600 font-bold block md:inline text-lg">367 árboles</span>
            </p>
          </div>
        </div>

        {/* Donation Mockup Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-emerald-500/20 transition-all duration-700"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4 tracking-tight">Actúa por el Planeta</h3>
            <p className="text-slate-400 text-sm font-medium mb-8 leading-relaxed">
              Cada árbol que dones es un paso real hacia la compensación de tu impacto ambiental. ¿Quieres contribuir a mitigar tu huella?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">¿Deseas donar árboles?</label>
                <div className="flex gap-3">
                  {['Sí', 'No'].map(opt => (
                    <button key={opt} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${opt === 'Sí' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Cantidad de árboles</label>
                <div className="relative group/field">
                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-emerald-500">
                    <TreePine size={16} />
                   </div>
                   <input 
                    type="number" 
                    placeholder="1, 2, 3..." 
                    className="w-full bg-slate-800 border-none rounded-xl py-3 pl-12 pr-4 text-white text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all"
                   />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 mb-8">
              <CircleDollarSign size={20} className="text-emerald-500 shrink-0" />
              <p className="text-xs md:text-sm font-semibold text-emerald-500">
                Valor por árbol: <span className="text-white">$25.000 COP</span>
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <p className="text-[10px] md:text-xs text-slate-400 font-medium leading-relaxed">
                Tu donación se realizará mediante <span className="text-white font-bold">deducción de nómina</span>. 
                Un integrante de Gestión Humana se pondrá en contacto contigo para acordar el valor y la periodicidad.
              </p>
              
              <div className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl cursor-pointer hover:bg-slate-800 transition-all group/check">
                <div className="w-5 h-5 rounded-md border-2 border-emerald-500 flex items-center justify-center transition-all group-hover/check:bg-emerald-500/10">
                  <div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm"></div>
                </div>
                <span className="text-xs font-bold text-white">¿Estás de acuerdo con el proceso?</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
               <button 
                onClick={() => window.location.reload()}
                className="flex-1 bg-white text-slate-900 py-4 rounded-2xl font-bold transition-all hover:bg-slate-100 active:scale-95 shadow-xl shadow-white/5"
               >
                 Finalizar y Salir
               </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch(currentStep) {
      // PERSONAL INFO (Steps 1-6)
      case 1:
        return (
          <QuestionWrapper title="¿Cuál es tu primer nombre?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                name="primerNombre"
                className="input-sober w-full text-center px-4"
                placeholder="Ingresa tu respuesta"
                value={formData.primerNombre}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </QuestionWrapper>
        );
      
      case 2:
        return (
          <QuestionWrapper title="¿Cuál es tu segundo nombre?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                name="segundoNombre"
                className="input-sober w-full text-center px-4"
                placeholder="Respuesta (Opcional)"
                value={formData.segundoNombre}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </QuestionWrapper>
        );

      case 3:
        return (
          <QuestionWrapper title="¿Cuál es tu primer apellido?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                name="primerApellido"
                className="input-sober w-full text-center px-4"
                placeholder="Ingresa tu respuesta"
                value={formData.primerApellido}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </QuestionWrapper>
        );

      case 4:
        return (
          <QuestionWrapper title="¿Cuál es tu segundo apellido?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                name="segundoApellido"
                className="input-sober w-full text-center px-4"
                placeholder="Respuesta (Opcional)"
                value={formData.segundoApellido}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </QuestionWrapper>
        );

      case 5:
        return (
          <QuestionWrapper title="¿Cuál es tu número de identificación?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                name="identificacion"
                className="input-sober w-full text-center px-4"
                placeholder="Número de ID"
                value={formData.identificacion}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </QuestionWrapper>
        );

      case 6:
        return (
          <QuestionWrapper title="¿Cuál es tu cargo?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                name="cargo"
                className="input-sober w-full text-center px-4"
                placeholder="Tu cargo actual"
                value={formData.cargo}
                onChange={handleChange}
                autoFocus
              />
            </div>
          </QuestionWrapper>
        );

      // SUSTAINABILITY INFO (Steps 7-20)
      case 7:
        return (
          <QuestionWrapper title="¿Cuántas personas viven en tu hogar?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="personasHogar"
                className="input-sober w-full text-center"
                placeholder="Ej. 3"
                value={formData.personasHogar}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">personas</span>
            </div>
          </QuestionWrapper>
        );
      
      case 8:
        return (
          <QuestionWrapper title="¿Cuál es el consumo mensual de electricidad?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="consumoElectricidad"
                className="input-sober w-full text-center"
                placeholder="Ej. 150"
                value={formData.consumoElectricidad}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">kW/h</span>
            </div>
          </QuestionWrapper>
        );

      case 9:
        return (
          <QuestionWrapper title="¿Consumes gas natural en tu hogar?" error={error}>
            <div className="flex gap-4 w-full max-w-xs">
              {['Sí', 'No'].map(option => (
                <button 
                  key={option}
                  className={`flex-1 py-6 text-2xl font-semibold rounded-xl transition-all duration-300 ${formData.consumeGasNatural === option ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  onClick={() => handleSelect({ consumeGasNatural: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </QuestionWrapper>
        );

      case 10:
        return (
          <QuestionWrapper title="¿Cuál es tu consumo mensual de gas natural?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="consumoGas"
                className="input-sober w-full text-center"
                placeholder="Ej. 15"
                value={formData.consumoGas}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">m³</span>
            </div>
          </QuestionWrapper>
        );

      case 11:
        return (
          <QuestionWrapper title="¿Posees vehículo particular?" error={error}>
            <div className="flex gap-4 w-full max-w-xs">
              {['Sí', 'No'].map(option => (
                <button 
                  key={option}
                  className={`flex-1 py-6 text-2xl font-semibold rounded-xl transition-all duration-300 ${formData.poseeVehiculo === option ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  onClick={() => handleSelect({ poseeVehiculo: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </QuestionWrapper>
        );

      case 12:
        return (
          <QuestionWrapper title="¿Qué km recorres en promedio diario?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="kmDiarios"
                className="input-sober w-full text-center"
                placeholder="Ej. 20"
                value={formData.kmDiarios}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">km</span>
            </div>
          </QuestionWrapper>
        );

      case 13:
        return (
          <QuestionWrapper title="¿Reciclas habitualmente en tu hogar?" error={error}>
            <div className="flex gap-4 w-full max-w-xs">
              {['Sí', 'No'].map(option => (
                <button 
                  key={option}
                  className={`flex-1 py-6 text-2xl font-semibold rounded-xl transition-all duration-300 ${formData.recicla === option ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  onClick={() => handleSelect({ recicla: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </QuestionWrapper>
        );

      case 14:
        return (
          <QuestionWrapper title="¿Realizas compostaje de residuos orgánicos?" error={error}>
            <div className="flex gap-4 w-full max-w-xs">
              {['Sí', 'No'].map(option => (
                <button 
                  key={option}
                  className={`flex-1 py-6 text-2xl font-semibold rounded-xl transition-all duration-300 ${formData.composta === option ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/10' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  onClick={() => handleSelect({ composta: option })}
                >
                  {option}
                </button>
              ))}
            </div>
          </QuestionWrapper>
        );

      case 15:
        return (
          <QuestionWrapper title="¿Cuántos viajes en avión realizas al año?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="viajesAvion"
                className="input-sober w-full text-center"
                placeholder="Ej. 2"
                value={formData.viajesAvion}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">viajes</span>
            </div>
          </QuestionWrapper>
        );

      case 16:
        return (
          <QuestionWrapper title="¿Cuánta carne consumes en promedio diario?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="consumoCarne"
                className="input-sober w-full text-center"
                placeholder="Ej. 0.25"
                value={formData.consumoCarne}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">kg</span>
            </div>
          </QuestionWrapper>
        );

      case 17:
        return (
          <QuestionWrapper title="¿Cuántas horas al día usas el aire acondicionado?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="horasAire"
                className="input-sober w-full text-center"
                placeholder="Ej. 4"
                value={formData.horasAire}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">horas</span>
            </div>
          </QuestionWrapper>
        );

      case 18:
        return (
          <QuestionWrapper title="¿Cuántas horas al día usas el computador?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="horasPC"
                className="input-sober w-full text-center"
                placeholder="Ej. 8"
                value={formData.horasPC}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">horas</span>
            </div>
          </QuestionWrapper>
        );

      case 19:
        return (
          <QuestionWrapper title="¿Cuántas horas usas el celular en promedio al día?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="horasCelular"
                className="input-sober w-full text-center"
                placeholder="Ej. 5"
                value={formData.horasCelular}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">horas</span>
            </div>
          </QuestionWrapper>
        );

      case 20:
        return (
          <QuestionWrapper title="¿Cuántas veces pides domicilio al mes?" error={error}>
            <div className="w-full relative flex items-center group/input max-w-[320px]">
              <input 
                type="text" 
                inputMode="numeric"
                name="pedidosDomicilio"
                className="input-sober w-full text-center"
                placeholder="Ej. 4"
                value={formData.pedidosDomicilio}
                onChange={handleChange}
                autoFocus
              />
              <span className="absolute right-6 text-[10px] md:text-xs text-emerald-600 font-bold tracking-wider uppercase pointer-events-none opacity-60">pedidos</span>
            </div>
          </QuestionWrapper>
        );

      case 21:
        return (
          <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col items-center mb-6 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-1 tracking-tight">Valida tu Información</h2>
              <span className="text-emerald-500 font-semibold text-[10px] tracking-[0.2em] uppercase">Resumen Final</span>
            </div>

            {/* User Info Header */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-8 text-slate-500 text-xs md:text-sm font-semibold border-b border-slate-100 pb-6 px-4">
              <div className="flex items-center gap-2">
                <User size={14} className="text-emerald-500" />
                <span>
                  {formData.primerNombre} {formData.segundoNombre ? `${formData.segundoNombre} ` : ''}
                  {formData.primerApellido} {formData.segundoApellido ? `${formData.segundoApellido}` : ''}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <IdCard size={14} className="text-emerald-500" />
                <span>ID: {formData.identificacion}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase size={14} className="text-emerald-500" />
                <span>{formData.cargo}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-2 mb-10 px-2 items-stretch">
              <SummaryItem label="Personas" value={formData.personasHogar} icon={Users} />
              <SummaryItem label="Electricidad" value={formData.consumoElectricidad} suffix="kW/h" icon={Zap} />
              <SummaryItem label="Gas Natural" value={formData.consumeGasNatural === 'Sí' ? formData.consumoGas : '0'} suffix="m³" icon={Flame} />
              <SummaryItem label="Movilidad" value={formData.poseeVehiculo === 'Sí' ? formData.kmDiarios : '0'} suffix="km/D" icon={Car} />
              <SummaryItem label="Reciclaje" value={formData.recicla === 'Sí' ? 'Si' : 'No'} icon={Recycle} />
              <SummaryItem label="Compostaje" value={formData.composta === 'Sí' ? 'Si' : 'No'} icon={Sprout} />
              <SummaryItem label="Avión" icon={Plane} value={formData.viajesAvion} suffix="viajes/AÑO" />
              <SummaryItem label="Carnes" icon={Beef} value={formData.consumoCarne} suffix="kg/D" />
              <SummaryItem label="Aire Acondicionado" icon={Wind} value={formData.horasAire} suffix="h/D" />
              <SummaryItem label="Computador" icon={Monitor} value={formData.horasPC} suffix="h/D" />
              <SummaryItem label="Celular" icon={Smartphone} value={formData.horasCelular} suffix="h/D" />
              <SummaryItem label="Domicilios" icon={ShoppingBag} value={formData.pedidosDomicilio} suffix="/MES" />
            </div>

            <div className="flex justify-center pb-4">
              <button 
                className="group flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg shadow-emerald-500/10 active:scale-95"
                onClick={onSubmit}
              >
                <Send size={18} />
                <span>Calcular Huella Ambiental</span>
              </button>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return <div className="w-full flex items-center justify-center">{renderStep()}</div>;
};

const QuestionWrapper = ({ children, title, error }) => (
  <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-3xl px-4 py-2 text-center relative mx-auto">
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-slate-800 mb-8 tracking-tight leading-snug text-balance">
      {title}
    </h2>
    <div className="w-full flex flex-col items-center">
      {children}
      {error && (
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-xs flex items-center justify-center gap-2 text-red-500 animate-in fade-in slide-in-from-top-1 duration-300">
          <Info size={14} />
          <p className="text-xs font-semibold tracking-wide text-center">
            {error}
          </p>
        </div>
      )}
    </div>
  </div>
);

const SummaryItem = ({ label, value, icon: Icon, suffix = "" }) => (
  <div className="flex flex-col items-center group/item w-full h-full">
    <div className="bg-white/60 backdrop-blur-xl border border-slate-100 rounded-2xl p-4 w-full h-full min-h-[160px] flex flex-col items-center justify-between transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1">
      <div className="flex flex-col items-center flex-1 justify-center mb-2">
        <div className="text-emerald-500 mb-2 transition-transform group-hover/item:scale-110 duration-500 bg-emerald-50 p-2 rounded-xl">
          <Icon size={20} strokeWidth={2} />
        </div>
        <span className="text-[9px] font-bold text-slate-400 tracking-[0.1em] uppercase mb-1 text-center line-clamp-2 max-w-[80px]">{label}</span>
      </div>
      
      <div className="bg-slate-50/50 px-2 py-3 rounded-lg border border-slate-100/50 w-full flex flex-col items-center justify-center gap-0.5 min-h-[64px]">
        <span className="text-sm md:text-base font-bold text-slate-700 tracking-tight leading-none uppercase text-center block w-full truncate">{value}</span>
        {suffix && (
          <span className="text-[8px] font-bold text-emerald-600 tracking-wide uppercase leading-none opacity-80">
            {suffix}
          </span>
        )}
      </div>
    </div>
  </div>
);

export default StepRenderer;
