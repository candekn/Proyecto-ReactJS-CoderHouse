import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {

  return (
        <div className='container-fluid'>
          <NavBar />
          <ItemListContainer greeting='Tangerine Games es una desarrolladora y distribuidora de juegos para diversas plataformas' />
        </div>
  )
}

export default App
