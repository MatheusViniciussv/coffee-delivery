import { Router } from './routes/index.tsx'
import { GlobalStyles } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme.ts'
import Geocode from 'react-geocode'
import { CartContextProvider } from './context/CartContext.tsx'

function App() {
  Geocode.setApiKey(import.meta.env.VITE_GOOGLE_API_KEY);

  // set response language. Defaults to english.
  Geocode.setLanguage("br");

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion("br");

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
