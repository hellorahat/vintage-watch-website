import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom'
import { FavoritesProvider } from './utility/FavoritesContext.jsx'
import { AlertProvider } from './utility/AlertContext.jsx'
import AlertComponent from './components/AlertComponent.jsx'
import { CartProvider } from './utility/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/vintage-watch-website">
    <>
      <AlertProvider>
        <CartProvider>
          <FavoritesProvider>
            <link href="https://fonts.googleapis.com/css2?family=Italianno&display=swap" rel="stylesheet" />
            <App />
            <AlertComponent />
          </FavoritesProvider>
        </CartProvider>
      </AlertProvider>
    </>
  </BrowserRouter>
)
