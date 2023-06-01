import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from '../pages/Test'
import GameConfiguration from '../pages/GameConfiguration'
import Roulette from '../pages/Roulette'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<GameConfiguration />}/>
                <Route path='/roulette' element={<Roulette />}/>
                <Route path='/test' element={<Test />}/>
            </Routes>
        </BrowserRouter>
    )
}