import React from 'react'
import { useState } from 'react';
import './styleComponents/contrato.css';

import pergaminho from '/pergaminho.png'

const Contrato = ({visible}) => {
  const [scale, setScale] = useState(1);

  const handleClick = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
  };

  const style = {
    transform: `scale(${scale})`,
    transition: 'transform 0.1s',
  };

  return (
    <div style={{ display: visible }}>
        <h1 className="pContrato">Olá minha bela dama, leia atentamente o contrato a seguir:</h1>
        <img src={pergaminho} className='pergaminhoIMG' />
        <div className="pergaminho">
          <p className='contractText'>Ao assinar o final deste contrato, você (Ana Júlia Fabrin), estará concordando em conviver para sempre ao lado de Igor Ventura de Oliveira independente do que aconteça, vocês irão casar, ter uma casa com muitos gatinhos e conviverão juntos para sempre. Não é bom deixar de assinar, estamos de olho.</p>
          <div className="fimDoContrato">
            <a href='#Aceitou'>Aceitar</a>
            <a style={style}
            onClick={handleClick}
            >Recusar</a>
          </div>
        </div>
    </div>
  )
}

export default Contrato
