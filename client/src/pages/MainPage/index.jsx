import * as C from './styles'
import GameConfiguration from './GameConfiguration'
import Roulette from './Roulette'
import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MainPage() {
    const [mustSpin, setMustSpin] = useState(false)

    return (
        <C.PageContainer>
            <Header />
            <C.PageContent>
                <GameConfiguration mustSpin={mustSpin} player='player1' />
                <Roulette mustSpin={mustSpin} setMustSpin={setMustSpin} />
                <GameConfiguration mustSpin={mustSpin} player='player2' />
            </C.PageContent>
            <Footer />
        </C.PageContainer>
    )
}