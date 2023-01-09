import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Index } from './components/Index/Index';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { Nosotros } from './components/Nosotros/Nosotros';
import { NotFound } from './components/NotFound/NotFound';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/juegos' element={ <ItemListContainer />} />
          <Route path='/juegos/plataforma/:plataforma' element={<ItemListContainer />} />
          <Route path='/juegos/detalle/:id' element={ <ItemDetailContainer /> } />
          <Route path='/nosotros' element={<Nosotros />} />
          <Route path='/*' element={<NotFound />} />     
        </Routes>
      </BrowserRouter>
    </main>

  )
}

export default App
