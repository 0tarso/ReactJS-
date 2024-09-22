import { Component, useEffect, useState } from 'react'
import './App.css'

// utilizando Class Component
class ShowNameClassComp extends Component {
  constructor(props) {

    super(props);

    this.state = {
      nome: 'Tailison',
      mostrarNome: true,
      hora: '00:00:00'
    };

    this.handleShowName = this.handleShowName.bind(this);

  }

  // ciclos de vida do Class Component

  // ao montar o component
  componentDidMount() {

    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() })
    }, [1000])
  }

  // ao atualizar algum state do componente
  componentDidUpdate() {
    console.log('Atualizando Componente')
  }


  handleShowName() {
    const state = this.state

    if (state.mostrarNome === true) {
      this.setState({ mostrarNome: false })
      console.log('Escondendo Nome')
    } else {
      this.setState({ mostrarNome: true })
      console.log('Mostrando Nome')
    }
  }

  render() {


    return (
      <div>
        <p>Componente de Classe Abaixo!!</p>

        <p>{this.state.hora}</p>

        <p>Props recebida de outro component: {this.props.nome}</p>

        {this.state.mostrarNome && <p>Props desse componente: {this.state.nome}</p>}

        <button onClick={this.handleShowName}>
          {this.state.mostrarNome ? 'Esconder Nome' : 'Mostrar Nome'}
        </button>
      </div>
    )
  }
}

// utilizando Func Component
function App() {
  const [count, setCount] = useState(0)
  const [firstLoad, setFirstLoad] = useState(true)
  const [zeroCount, setZeroCount] = useState(false)

  // useEffect
  useEffect(() => {

    setTimeout(() => {
      setFirstLoad(false)
    }, [2000])

  }, [])

  // aumentar o valor de contador
  const handleCount = () => {
    setCount(count + 1)
  }

  // diminuir o valor do contador
  const handleReset = () => {
    if (count === 0) {
      setZeroCount(true)

      setTimeout(() => {
        setZeroCount(false)
      }, [2000])
      return
    }

    setCount(0)
    window.alert('Contador resetado')
  }


  return (
    <>
      <div>
        {firstLoad && <p>Bem vindo ao contador!</p>}
      </div>

      <div>
        <p>Hello World!</p>
      </div>

      <p>{count}</p>


      <button onClick={handleCount}>Count</button>
      <button onClick={handleReset}>Reset</button>

      {/* render condiciconal */}
      {zeroCount && <p>Contador já está zerado</p>}

      {/* render condicional */}
      {count === 5 && <p>Chegamos ao cinco</p>}

      <ShowNameClassComp nome='Tarso' />
    </>
  )
}

export default App
