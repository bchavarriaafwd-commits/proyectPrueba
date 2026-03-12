import React from 'react';
import './CardsIndicadores.css';


const CardsIndicadores = () => {
  return (
    <section className="contenedor-cards-grid">
      
      <div className="cardItem cardInversion">
        <div className="cardIcono">🌳</div>
        <div className="cardDatos">
          <span className="cardTitulo">Espacios Recuperados</span>
          <h2 className="cardNumero">12 / 30</h2>
          <p className="cardMeta">Meta Anual: Parques Puntarenas</p>
        </div>
        <div className="cardBadge badgeAzul">Línea #4</div>
      </div>


      <div className="cardItem cardPrevencion">
        <div className="cardIcono">📢</div>
        <div className="cardDatos">
          <span className="cardTitulo">Campañas Ejecutadas</span>
          <h2 className="cardNumero">02 / 06</h2>
          <p className="cardMeta">Prevención: Centros Educativos</p>
        </div>
        <div className="cardBadge badgeVerde">Línea #1</div>
      </div>

      <div className="cardItem cardCalle">
        <div className="cardIcono">🤝</div>
        <div className="cardDatos">
          <span className="cardTitulo">Seguimientos Realizados</span>
          <h2 className="cardNumero">01 / 04</h2>
          <p className="cardMeta">Atención Interinstitucional</p>
        </div>
        <div className="cardBadge badgeNaranja">Línea #3</div>
      </div>


      <div className="cardItem cardFlujo">
        <div className="cardIcono">📸</div>
        <div className="cardDatos">
          <span className="cardTitulo">Evidencias Pendientes</span>
          <h2 className="cardNumero">05</h2>
          <p className="cardMeta">Reportes sin foto cargada</p>
        </div>
        <div className="cardBadge badgeRojo">Crítico</div>
      </div>

    </section>
  );
};

export default CardsIndicadores;
