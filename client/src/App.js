import RoutesApp from "./routes"
import GlobalStyle from "./styles/globals"
import { PlayerProvider } from "./contexts/player"


export default function App() {
  return (
    <PlayerProvider>
      <RoutesApp />
      <GlobalStyle />
    </PlayerProvider>
    
  )
}
