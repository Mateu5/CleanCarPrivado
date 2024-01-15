import React from 'react';

function ComponenteComHorarios({ horariosDisponiveis }) {
  return (
    <div>
      {horariosDisponiveis.map((horario, index) => (
        <span key={index}>{horario}</span>
      ))}
    </div>
  );
}

export default ComponenteComHorarios;
