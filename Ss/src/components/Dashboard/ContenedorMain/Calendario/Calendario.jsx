import React, { useState } from 'react';
import Calendar from 'react-calendar'; 
import './Calendario.css';

const CalendarioActividades = () => {
  const [fecha, setFecha] = useState(new Date());

  const fechasConEventos = [
    { fecha: '2026-03-03', tipo: 'linea-4', titulo: 'Parque Barranca' },
    { fecha: '2026-03-06', tipo: 'linea-1', titulo: 'Campaña El Roble' },
    { fecha: '2026-03-12', tipo: 'hoy', titulo: 'Conversatorio AREDE' },
    { fecha: '2026-03-15', tipo: 'linea-3', titulo: 'Seguimiento Calle' }
  ];

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const fechaString = date.toISOString().split('T')[0];
      const evento = fechasConEventos.find(e => e.fecha === fechaString);
      return evento ? `evento-${evento.tipo}` : null;
    }
  };

  return (
    <div className="calendarioSeccionContenedor">
      <div className="calendarioHeaderFlex">
        <h3>Planificación Territorial - Puntarenas</h3>
        <span className="badgeIntervenciones">4 Operativos este mes</span>
      </div>

      <div className="libreriaWrapper">
        <Calendar 
          onChange={setFecha} 
          value={fecha} 
          tileClassName={tileClassName}
          locale="es-CR"
        />
      </div>

      <div className="proximosEventosLista">
        <p className="subtituloCalendario">Próximas Metas Críticas:</p>
        <div className="eventoItem">
          <span className="puntoAzul"></span>
          <p><strong>15 Mar:</strong> Seguimiento Personas Calle (Chacarita)</p>
        </div>
        <div className="eventoItem">
          <span className="puntoVerde"></span>
          <p><strong>22 Mar:</strong> Feria Emprendimiento (Paseo Turistas)</p>
        </div>
      </div>
    </div>
  );
};

export default CalendarioActividades;
