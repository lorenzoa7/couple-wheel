import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from '../pages/MainPage'

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainPage />}/>
            </Routes>
        </BrowserRouter>
    )
}