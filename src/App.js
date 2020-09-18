import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsultar] = useState(false)

  const {ciudad, pais} = busqueda

  useEffect(() => {
    const consultarAPI = async () => {
      if(consultar) {
        //KEY de la aplicación y la url con los valores que se pasan en formato query string
        const appId = 'deb1cf72487aa6baac8035d8ba76e829'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        //esperamos la respuesta de la API y la guardamos en formato JSON
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        console.log(resultado)
      }
    }

    consultarAPI()
  }, [consultar])

  return (
    <>
      <Header titulo='Clima React App' />

      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Formulario busqueda={busqueda} guardarBusqueda={guardarBusqueda} guardarConsultar={guardarConsultar} /> 
            </div>
            <div className='col m6 s12'>
              2
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App