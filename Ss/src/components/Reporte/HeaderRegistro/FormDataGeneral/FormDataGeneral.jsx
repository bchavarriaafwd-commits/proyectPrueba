import React from 'react';

const FormDataGeneral = () => {
  return (
    <div className="formContainer">
      
      <div className="formHeader">
        <h3>Información General del Reporte</h3>
        <p>Sembremos Seguridad - Captura de Datos</p>
      </div>

      <form className="formCuerpo">
        
        <div className="formGrupo">
          <label htmlFor="actividad">Actividad / Lugar de Intervención</label>
          <input 
            type="text" 
            id="actividad" 
            placeholder="Ej: Parque Barranca o Colegio El Roble" 
            className="inputBusqueda" 
          />
        </div>

 
        <div className="formGrid">
          
          <div className="formColumna">
            <label htmlFor="linea">Línea de Acción</label>
            <select id="linea" className="selectFiltro">
              <option value="">Seleccione una línea...</option>
              <option value="1">Línea #1 - Prevención</option>
              <option value="3">Línea #3 - Atención</option>
              <option value="4">Línea #4 - Espacios Públicos</option>
            </select>
          </div>

          <div className="formColumna">
            <label htmlFor="fecha">Fecha de Intervención</label>
            <input 
              type="date" 
              id="fecha" 
              className="inputBusqueda" 
            />
          </div>

        </div>

        <div className="formGrid">
          
          <div className="formColumna">
            <label htmlFor="funcionario">Funcionario Responsable</label>
            <select id="funcionario" className="selectFiltro">
              <option value="">Seleccione oficial...</option>
              <option value="Jimenez">Of. Jiménez</option>
              <option value="Castro">Of. Castro</option>
              <option value="Vargas">Of. Vargas</option>
            </select>
          </div>

          <div className="formColumna">
            <label htmlFor="estado">Estado Inicial</label>
            <select id="estado" className="selectFiltro">
              <option value="pendiente">Pendiente</option>
              <option value="revision">En Revisión</option>
              <option value="aprobado">Aprobado</option>
            </select>
          </div>

        </div>

        <div className="formEvidencia">
          <label>Cargar Evidencia Fotográfica</label>
          <div className="dropzoneArea">
            <span>📸</span>
            <input type="file" id="evidencia" />
            <p>Seleccionar archivo de imagen</p>
          </div>
        </div>

        <div className="formAcciones">
          <button type="button" className="btnCrud btnEliminar">
            Cancelar
          </button>
          <button type="submit" className="btnActualizar">
            💾 Guardar Reporte
          </button>
        </div>

      </form>
    </div>
  );
};

export default FormDataGeneral;
