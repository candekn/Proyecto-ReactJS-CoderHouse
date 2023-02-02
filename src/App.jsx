import './App.scss';
import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { AppRouter } from './router/AppRouter';



function App() {
  return (
    <main>
        <CartProvider>
      <LoginProvider>
          <AppRouter />
      </LoginProvider>
        </CartProvider>
    </main>
  )
}

export default App
