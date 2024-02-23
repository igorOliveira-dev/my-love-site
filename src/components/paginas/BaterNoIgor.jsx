import React, { useState } from 'react';
import './pagesStyles/baterNoIgor.css';

import igorEspancado from '/igorEspancado.jpg';
import igor from '/igor.jpg'

function MeuComponente() {
  const [imagem, setImagem] = useState(igor);

  const handleClick = () => {
    // Muda a imagem quando clicada
    setImagem(igorEspancado);

    // Muda a imagem de volta para a original após alguns milissegundos
    setTimeout(() => {
      setImagem(igor);
    }, 250); // ajuste este valor para o tempo desejado
  };

  return (
    <img src={imagem} onClick={handleClick} />
  );
}

export default MeuComponente;
