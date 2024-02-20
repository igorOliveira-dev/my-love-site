import React from 'react'
import './styleComponents/aceitou.css'

import {Swiper, SwiperSlide} from 'swiper/react'

const Aceitou = () => {

  const swiperImages = [
    {id: '1', image: '1foto.png'},
    {id: '2', image: '2foto.png'},
    {id: '3', image: '3foto.png'},
    {id: '4', image: '4foto.png'},
    {id: '5', image: '5foto.png'},
    {id: '6', image: '6foto.png'},
    {id: '7', image: '7foto.png'},
    {id: '8', image: '8foto.png'},
    {id: '9', image: '9foto.png'},
    {id: '10', image: '10foto.png'},
    {id: '11', image: '11foto.png'},
    {id: '12', image: '12foto.png'},
    {id: '13', image: '13foto.png'},
    {id: '14', image: '14foto.png'},
    {id: '15', image: '15foto.png'},
    {id: '16', image: '16foto.png'},
    {id: '17', image: '17foto.png'},
    {id: '18', image: '18foto.png'},
  ]
  
  return (
    <div className='aceitou'>
      <h2>Olá meu amooooooooorrrrrrrr, que bom que você aceitou a proposta, eu quero te dizer que você é a pessoa certa pra mim e que eu fico muito feliz de você ter aceitado viver comigo, eu sou genuinamente muito grato por essa vontade sua. <br /> Vou deixar aqui para você fotos nossas bem lindos que eu espero que você vai gostar gatinha 🫶</h2>

      <Swiper
        slidesPerView={1}
        navigation
      >
        {swiperImages.map ( (item) => (
          <SwiperSlide key={item.id} style={{display: 'flex', justifyContent: 'center'}}>
            <img
            src={item.image}
            alt="Slider"
            className='slide-item'
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>Minha princesa, eu também quero te deixar feliz independente do momento que você esta vendo esse site, então eu quero que você escolha a opção que você mais se identifica e clique nela, linda. <br />
      Eu te amo muito bê 💜</h2>

      <div className="pagesArea">
        <a href="feliz">Quando você estiver feliz</a>
        <a href="triste">Quando você estiver triste</a>
        <a href="baterNoIgor">Quando você quiser espancar o Igor</a>
      </div>

    </div>
  )
}

export default Aceitou
