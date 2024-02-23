import {Swiper, SwiperSlide} from 'swiper/react'
import { register } from 'swiper/element/bundle'
register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import React from 'react'
import './styleComponents/aceitou.css'

import foto1 from '/1foto.png'
import foto2 from '/2foto.png'
import foto3 from '/3foto.png'
import foto4 from '/4foto.png'
import foto5 from '/5foto.png'
import foto6 from '/6foto.png'
import foto7 from '/7foto.png'
import foto8 from '/8foto.png'
import foto9 from '/9foto.png'
import foto10 from '/10foto.png'
import foto11 from '/11foto.png'
import foto12 from '/12foto.png'
import foto13 from '/13foto.png'
import foto14 from '/14foto.png'
import foto15 from '/15foto.png'
import foto16 from '/16foto.png'
import foto17 from '/17foto.png'
import foto18 from '/18foto.png'

const Aceitou = () => {

  const swiperImages = [
    {id: '1', image: foto1},
    {id: '2', image: foto2},
    {id: '3', image: foto3},
    {id: '4', image: foto4},
    {id: '5', image: foto5},
    {id: '6', image: foto6},
    {id: '7', image: foto7},
    {id: '8', image: foto8},
    {id: '9', image: foto9},
    {id: '10', image: foto10},
    {id: '11', image: foto11},
    {id: '12', image: foto12},
    {id: '13', image: foto13},
    {id: '14', image: foto14},
    {id: '15', image: foto15},
    {id: '16', image: foto16},
    {id: '17', image: foto17},
    {id: '18', image: foto18},
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
            style={{position: 'relative',}}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <h2>Minha princesa, eu também quero te deixar feliz independente do momento que você esta vendo esse site, então eu quero que você escolha a opção que você mais se identifica e clique nela, linda. <br />
      Eu te amo muito bê 💜</h2>

      <div className="pagesArea">
        <a href="#feliz">Quando você estiver feliz</a>
        <a href="#triste">Quando você estiver triste</a>
        <a href="#baterNoIgor">Quando você quiser espancar o Igor</a>
      </div>
    </div>
  )
}

export default Aceitou
