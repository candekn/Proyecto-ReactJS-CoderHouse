import './App.scss';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { AppRouter } from './router/AppRouter';



function App() {
  return (
    <main>
      <LoginProvider>
        <CartProvider>
          <AppRouter />
        </CartProvider>
      </LoginProvider>
    </main>
  )
}

export default App
