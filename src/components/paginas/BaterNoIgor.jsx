import React, { useState } from 'react';
import './pagesStyles/baterNoIgor.css'

function MeuComponente() {
  const [imagem, setImagem] = useState('igor.jpg');

  const handleClick = () => {
    // Muda a imagem quando clicada
    setImagem('igorEspancado.jpg');

    // Muda a imagem de volta para a original após alguns milissegundos
    setTimeout(() => {
      setImagem('igor.jpg');
    }, 250); // ajuste este valor para o tempo desejado
  };

  return (
    <img src={imagem} onClick={handleClick} />
  );
}

export default MeuComponente;
