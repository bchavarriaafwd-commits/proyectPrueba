import React from 'react';
import './SideBar.css';


const Sidebar = () => {
  return (
    <aside className="ContenedorSidebar">
      
      <div className="brandSection">
        <div className="logoPlaceholder">
          <span>MUNI-P</span>
        </div>
        <h2 className="TituloProyecto">SEMBREMOS SEGURIDAD</h2>
      </div>

      <div className="userProfile">
        <div className="avatar">A</div>
        <div className="userInfo">
          <p className="userName">Admin. Regional</p>
          <p className="userRole">Puntarenas Centro</p>
        </div>
      </div>
      <nav className="navMenu">
        <span className="menuLabel">Menú de Control</span>
        <ul>
          <li className="navItem active">
            <span className="icon">📊</span> Dashboard Principal
          </li>
          <li className="navItem">
            <span className="icon">📝</span> Registrar Actividad
          </li>
          <li className="navItem">
            <span className="icon">🚩</span> Líneas de Acción 2025
          </li>
          <li className="navItem">
            <span className="icon">📄</span> Generador de Oficios
          </li>
        </ul>
      </nav>

      <div className="sidebarFooter">
        <div className="statusIndicator">
          <div className="statusDot"></div>
          <span>Sistema Sincronizado</span>
        </div>
        <button className="logoutBtn">
          Cerrar Sesión
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;