import React from 'react';
import './TablaReportes.css';


const TablaReportes = () => {
  const reportesRecientes = [
    { id: '001', fecha: '12/03/26', linea: 'Línea #4', actividad: 'Parque Barranca', funcionario: 'Of. Jiménez', estado: 'Pendiente', evidencia: 'No' },
    { id: '002', fecha: '11/03/26', linea: 'Línea #1', actividad: 'Colegio El Roble', funcionario: 'Of. Castro', estado: 'Aprobado', evidencia: 'Si' },
    { id: '003', fecha: '10/03/26', linea: 'Línea #3', actividad: 'Calle Chacarita', funcionario: 'Of. Vargas', estado: 'Revisión', evidencia: 'Si' },
    { id: '004', fecha: '09/03/26', linea: 'Línea #4', actividad: 'Centro Cívico Paz', funcionario: 'Of. Jiménez', estado: 'Aprobado', evidencia: 'Si' },
  ];

  return (
    <div className="tablaContenedorPrincipal">
      <div className="tablaHeaderFlex">
        <h4>Gestión de Reportes Operativos</h4>
        <div className="tablaFiltros">
          <input type="text" placeholder="Buscar actividad..." className="inputBusqueda" />
          <select className="selectFiltro">
            <option>Todas las Líneas</option>
            <option>Línea #1</option>
            <option>Línea #3</option>
            <option>Línea #4</option>
          </select>
        </div>
      </div>

      <table className="tablaReportesCss">
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Línea de Acción</th>
            <th>Actividad / Lugar</th>
            <th>Funcionario</th>
            <th>Evidencia (📸)</th>
            <th>Estado</th>
            <th>Acciones (CRUD)</th>
          </tr>
        </thead>
        <tbody>
          {reportesRecientes.map((reporte) => (
            <tr key={reporte.id}>
              <td>{reporte.id}</td>
              <td>{reporte.fecha}</td>
              <td><span className={`badgeLinea ${reporte.linea.replace('#', '').replace(' ', '').toLowerCase()}`}>{reporte.linea}</span></td>
              <td>{reporte.actividad}</td>
              <td>{reporte.funcionario}</td>
              <td className="celdaCentro">
                {reporte.evidencia === 'Si' ? '✅' : '❌'}
              </td>
              <td>
                <span className={`statusBadge ${reporte.estado.toLowerCase()}`}>
                  {reporte.estado}
                </span>
              </td>
              <td className="celdaAcciones">
                <button className="btnCrud btnVer">👁️</button>
                <button className="btnCrud btnEditar">✏️</button>
                <button className="btnCrud btnEliminar">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="tablaFooter">
        <p>Mostrando {reportesRecientes.length} registros del flujo actual</p>
      </div>
    </div>
  );
};

export default TablaReportes;
