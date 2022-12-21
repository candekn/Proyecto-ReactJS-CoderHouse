import './App.scss';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import { ItemCount }  from "./components/ItemCount/ItemCount";

function App() {

  return (
        <main>
          <NavBar />
          <ItemCount />
          <hr />
          <ItemListContainer greeting='Tangerine Games es una desarrolladora y distribuidora de juegos para diversas plataformas' />
        </main>

  )
}

export default App
