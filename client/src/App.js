import RoutesApp from "./routes"
import GlobalStyle from "./styles/globals"
import { GeneralProvider } from "./contexts/general"


export default function App() {
  return (
    <GeneralProvider>
      <RoutesApp />
      <GlobalStyle />
    </GeneralProvider>
    
  )
}
