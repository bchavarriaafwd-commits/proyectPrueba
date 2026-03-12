import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import './GraficoEstadistico.css';


const GraficoEstadistico = () => {
  
  // Datos basados en las metas de tus fotos (Drogas, Hurtos, etc.)
  const datosPuntarenas = [
    { nombre: 'Hurtos', total: 42, color: '#003366' },
    { nombre: 'Drogas', total: 35, color: '#28a745' }, // Línea #1
    { nombre: 'Asaltos', total: 28, color: '#0056b3' },
    { nombre: 'Calle', total: 20, color: '#ffc107' },   // Línea #3
    { nombre: 'VIF', total: 15, color: '#dc3545' },
  ];

  return (
    <div className="grafico-card">
      <div className="grafico-header">
        <h4>Incidencia Criminal Mensual</h4>
        <span className="region-tag">Puntarenas - Región Sexta</span>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={datosPuntarenas} margin={{ top: 20, right: 30, left: -20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis 
              dataKey="nombre" 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#666', fontSize: 12}} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{fill: '#666', fontSize: 12}} 
            />
            <Tooltip 
              cursor={{fill: '#f8f9fa'}} 
              contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'}}
            />
            <Bar dataKey="total" radius={[4, 4, 0, 0]} barSize={40}>
              {datosPuntarenas.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grafico-footer">
        <p>Datos actualizados al: 12 de Marzo, 2026</p>
      </div>
    </div>
  );
};

export default GraficoEstadistico;
