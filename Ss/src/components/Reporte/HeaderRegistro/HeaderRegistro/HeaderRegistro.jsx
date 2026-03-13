import React from 'react';

const HeaderRegistro = () => {
  return (
    <header className="contenedorHeader">
      
      <div className="seccionInfo">
        <h1 className="tituloPagina">Registro de Nueva Actividad</h1>
        <p className="subtituloPagina">Sembremos Seguridad - Formulario Operativo</p>
      </div>

      <div className="usuarioInfoDerecha">
        
        <div className="fechaContenedor">
          <span className="iconoCalendario">📅</span>
          <span className="textoFecha">Martes, 17 de Marzo 2026</span>
        </div>


        <button className="btnActualizar" style={{marginRight: '20px'}}>
          🏠 Volver al Panel
        </button>

        <div className="perfilResumen">
          <div className="avatarCirculo">FC</div>
        </div>

      </div>

    </header>
  );
};

export default HeaderRegistro;
