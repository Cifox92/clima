import React, {useState, useEffect} from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima'
import Error from './components/Error'

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  })

  const [consultar, guardarConsultar] = useState(false)
  const [resultado, guardarResultado] = useState({})
  const [error, guardarError] = useState(false) //En caso de que la API no encuentre la ciudad...

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

        guardarResultado(resultado)
        guardarConsultar(false)
        
        //En caso de que la API devuelva un error
        if(resultado.cod === '404') {
          guardarError(true)
        } else {
          guardarError(false)
        }
      }
    }

    consultarAPI()
    // eslint-disable-next-line
  }, [consultar])


  let componente
  error ? componente = <Error mensaje='No hay resultados.' /> : componente = <Clima resultado={resultado} />

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
              {componente}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App