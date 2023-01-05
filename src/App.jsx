import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Index } from './components/Index/Index';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {
  const platforms = ['Playstation 5', 'Switch', 'PC'];

  return (
    <main>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/juegos' element={ <ItemListContainer />} />
          <Route path='/juegos/:categoria' element={<ItemListContainer />} />
          <Route path='/' element={<Index />} />

        </Routes>
      </BrowserRouter>
    </main>

  )
}

export default App
