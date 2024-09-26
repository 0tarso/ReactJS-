import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Home from './Pages/Home/Home.jsx'
import Sobre from './Pages/Sobre/Sobre.jsx'
import Header from './assets/Components/Header/Header.jsx'
import Erro from './Pages/Erro/Erro.jsx'
import Produto from './Pages/Produto/Produto.jsx'

export const RoutesApp = () => {
    return (

        <BrowserRouter>

            <Header />
            <Routes>

                <Route
                    // O "/" significa a página inicial
                    path='/'
                    element={<Home />}

                />

                <Route
                    // O "/" significa a página inicial
                    path='/sobre'
                    element={<Sobre />}
                />

                <Route
                    // renderiza a rota e recebe parâmetros
                    path='/produto/:id'
                    element={<Produto />}
                />

                <Route
                    // renderiza quando houver retornar erro
                    path='*'
                    element={<Erro />}
                />

            </Routes>
        </BrowserRouter>
    )
}