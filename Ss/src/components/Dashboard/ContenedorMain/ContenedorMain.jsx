import React from 'react';
import './ContenedorMain.css';
import DashboardHeader from './DashboardHeader/DashboardHeader';
import CardsIndicadores from './CardsIndicadores/CardsIndicadores';
import Calendario from './Calendario/Calendario';
import GraficoEstadistico from './GraficoEstadistico/GraficoEstadistico';
import TablaReportes from './TablaReportes/TablaReportes';



const ContenedorMain = () => {
  return (
    <div className="mainWrapper">
      
      <DashboardHeader />

      <div className="scrollContent">
        
        <section className="filaIndicadores">
          <CardsIndicadores />
        </section>

        <div className="gridCentral">
          
          <div className="columnaIzquierda60">
            <Calendario/>
          </div>

          <div className="columnaDerecha40">
            <GraficoEstadistico/>
          </div>

        </div>

        <section className="seccionTablaReportes">
          <div className="encabezadoTabla">
            <h3>Historial de Reportes - Sembremos Seguridad</h3>
            <button className="btnActualizar">🔄 Actualizar Flujo</button>
          </div>
          <TablaReportes/>
        </section>

      </div>
    </div>
  );
};

export default ContenedorMain;
