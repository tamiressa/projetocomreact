import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react';
import Time from './componentes/Time';



function App() {

  const times = [

    {
      nome: 'RED CANIDS KALUNGA',
      corPrimaria: '#DC0000',
      corSecundaria: '#FD8A8A'
    },

    {
      nome: 'PAIN GAMING',
      corPrimaria: '#fff',
      corSecundaria: '#9D9D9D'
    },

    {
      nome: 'LOS GRANDES',
      corPrimaria: '#DC5F00',
      corSecundaria: '#FEBE8C'
    },

    {
      nome: 'LOUD',
      corPrimaria: '#16FF00',
      corSecundaria: '#CDE990'
    },

    {
      nome: 'LIBERTY',
      corPrimaria: '#2B3467',
      corSecundaria: '#E3F6FF'
    },

    {
      nome: 'KABUM',
      corPrimaria: '#FC7300',
      corSecundaria: '#FAAB78'
    },

    {
      nome: 'FLUXO',
      corPrimaria: '#301E67',
      corSecundaria: '#D09CFA'
    },

    {
      nome: 'INTZ',
      corPrimaria: '#191825',
      corSecundaria: '#EEEEEE'
    },

    {
      nome: 'FURIA',
      corPrimaria: '#1746A2',
      corSecundaria: '#AAC4FF'
    },

    {
      nome: 'VIVO KEYD STARS',
      corPrimaria: '#AD7BE9',
      corSecundaria: '#ECC5FB'
    },

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado =  (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrador={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      <div>
      {times.map(time => <Time
      key={time.nome} 
      time={time.nome}
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria = {time.corSecundaria} 
      colaboradores = {colaboradores}
      />)}
    </div>
    </div>
  )
}

export default App;
