import { Router } from './routes/index.tsx'
import { GlobalStyles } from './styles/global.ts'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/defaultTheme.ts'
import Geocode from 'react-geocode'

function App() {
  Geocode.setApiKey(import.meta.env.VITE_GOOGLE_API_KEY);

  // set response language. Defaults to english.
  Geocode.setLanguage("en");

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion("es");

  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
