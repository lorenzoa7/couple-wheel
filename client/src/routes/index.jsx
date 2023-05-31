import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from '../pages/Test'
import GameConfiguration from '../pages/GameConfiguration'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<GameConfiguration />}/>
                <Route path='/test' element={<Test />}/>
            </Routes>
        </BrowserRouter>
    )
}