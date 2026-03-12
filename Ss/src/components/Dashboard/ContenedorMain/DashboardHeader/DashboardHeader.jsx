import React from 'react';
import './DashboardHeader.css';


const DashboardHeader = () => {
  return (
    <header className="contenedorHeader">
      
      <div className="seccionInfo">
        <h1 className="tituloPagina">Panel de Control Principal</h1>
        <p className="subtituloPagina">Sembremos Seguridad - Puntarenas Centro</p>
      </div>

      <div className="usuarioInfoDerecha">
        
        <div className="fechaContenedor">
          <span className="iconoCalendario">📅</span>
          <span className="textoFecha">Martes, 17 de Marzo 2026</span>
        </div>

        <div className="notificaciones">
          <span className="campana">🔔</span>
          <span className="puntoAlerta"></span>
        </div>

        <div className="perfilResumen">
          <div className="textoPerfil">
            <span className="nombreUsuario">Com. Francisco Cordero</span>
            <span className="rolEtiqueta">Director Regional</span>
          </div>
          <div className="avatarCirculo">FC</div>
        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;
