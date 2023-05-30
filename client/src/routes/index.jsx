import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from '../pages/Test'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Test />}/>
            </Routes>
        </BrowserRouter>
    )
}