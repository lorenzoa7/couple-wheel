import * as C from './styles'
import GameConfiguration from './GameConfiguration'
import Roulette from './Roulette'
import Header from './Header'
import Footer from './Footer'
import useMediaQuery from '../../hooks/useMediaQuery'

export default function MainPage() {
    const [mustSpin, setMustSpin] = useState(false)
    const minMd = useMediaQuery('(min-width: 768px)')
    const max2Xl = useMediaQuery('(max-width: 1535px)')

    return (
        <C.PageContainer>
            <Header />
            <C.PageContent>
                <GameConfiguration visible={!(max2Xl && minMd)} mustSpin={mustSpin} player='player1' />
                <Roulette mustSpin={mustSpin} setMustSpin={setMustSpin} />
                <GameConfiguration visible={!(max2Xl && minMd)} mustSpin={mustSpin} player='player2' />
                
                <C.MdContainer $visible={(max2Xl && minMd)}>
                    <GameConfiguration mustSpin={mustSpin} player='player1' />
                    <GameConfiguration mustSpin={mustSpin} player='player2' />
                </C.MdContainer>
            </C.PageContent>
            <Footer />
        </C.PageContainer>
    )
}