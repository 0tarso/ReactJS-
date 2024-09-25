import { useEffect, useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import ListItems from './Components/ListItems/ListItems'

// https://sujeitoprogramador.com/rn-api/?api=posts



function App() {

  useEffect(() => {

    const url = "https://sujeitoprogramador.com/rn-api/?api=posts"

    const loadApi = () => {
      fetch(url)
        .then((response) => response.json())

        .then((json) => {
          console.log(json)
          setApiData(json)
        })

        .catch((error) => {
          console.error(error)
        })
    }

    loadApi()
  }, [])


  const [apiData, setApiData] = useState([])


  return (

    <div className='app-container'>
      <Header />

      <ListItems data={apiData} />
    </div>

  )
}

export default App
