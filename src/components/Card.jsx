import React from 'react';
import propTypes from 'prop-types';

function Card({ dadosPas }) {
  const {
    location,
    current,
  } = dadosPas;
  return (

    <div className="bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <div className="text-center">
        <span className="block text-xl font-bold text-slate-700">{location.name}</span>
        <span className="text-slate-400 text-sm font-medium">{`${location.region},${' '}${location.country}`}</span>
      </div>
      <div className="flex mt-4 mb-2 justify center">
        <span className="text-8xl font-bold text-slate-700">{current.temp_c}</span>
        <span className="text-3xl mt-2 font-bold text-slate-700">°C</span>
      </div>
      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt="icon" />
        <span className="text-slate-700 font-medium">{current.condition.text}</span>
        <span className="text-slate-400 text-sm font-medium">{`${'Umidade Relativa'} ${current.humidity}`}</span>
      </div>
    </div>
  );
}

export default Card;

Card.propTypes = {
  dadosPas: propTypes.object,
}.isRequired;
