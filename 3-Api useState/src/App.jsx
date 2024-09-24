import { useEffect, useState } from 'react'
import './App.css'
import { SimpleButton } from './style'

function App() {


  const [input, setInput] = useState("")

  // listaItens é um state que armazena um array
  const [listaItens, setListaItens] = useState([])



  // uso do useEffect para recuperar dados do localStorage ao abri o app
  useEffect(() => {
    const itens = localStorage.getItem("@tarefas")

    if (itens) {
      setListaItens(JSON.parse(itens))

      console.log("Itens encontrados", JSON.parse(itens))
    }


  }, [])

  // fazendo uso do useEffect para atualizar listaItens no localStorage
  // sempre que houver uma mudança nesse array
  useEffect(() => {
    localStorage.setItem("@tarefas", JSON.stringify(listaItens))
  }, [listaItens])




  // function que verifica se o input está vazio
  // caso não esteja, add o value do input ao state listaItens
  // limpa o state input
  const handleAdd = () => {
    if (input !== "") {

      // setamos o array com os itens ja existentes mais o input
      setListaItens([...listaItens, input])
      alert("Item Adicionado")
      setInput("")

    } else {
      alert("Preencha os campos!")
    }
  }

  const handleLogLista = () => {
    if (listaItens.length > 0) {
      alert(listaItens)
    } else {
      alert("Lista vazia")
    }
  }

  const handleDeleteList = () => {
    setListaItens([])
  }

  return (
    <>
      <div className='container'>
        Adicionar Item
        <input
          type='text'
          value={input}
          onChange={e => setInput(e.target.value)}
        />

        <SimpleButton
          type='button'
          onClick={handleAdd}
        >Adicionar</SimpleButton>


        {listaItens.length > 0
          ? (
            <SimpleButton type='button' onClick={handleLogLista}>
              Log Lista
            </SimpleButton>
          ) : null
        }


        <ul className='lista'>
          {listaItens && listaItens.map(item => (
            <li key={item}> {item} </li>
          )
          )
          }
        </ul>

        {listaItens.length > 0
          ? (
            <SimpleButton type='button' onClick={handleDeleteList}>
              Limpar
            </SimpleButton>

          ) : null
        }

      </div>
    </>
  )
}

export default App
