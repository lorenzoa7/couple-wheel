import * as C from './styles'
import ActivitiesList from './ActivitiesList'
import usePlayer from '../../../hooks/usePlayer'
import { useEffect, useState } from 'react'

export default function GameConfiguration({ player = 'player1', mustSpin }) {

    const { playerData, setPlayerData } = usePlayer()

    const [openTheme, setOpenTheme] = useState({ player1: false, player2: false })

    const handleChangeName = e =>
        setPlayerData({ ...playerData, [e.target.name]: { ...playerData[e.target.name], name: e.target.value } })

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    useEffect(() => {
        console.log(openTheme)
    }, [openTheme])

    return (
        <C.Main $spinning={mustSpin}>
            <C.Section>
                <C.PlayerContainer theme={playerData[player].theme}>
                    <C.PlayerInput
                        name={player}
                        value={playerData[player].name}
                        onChange={handleChangeName}
                        onKeyDown={handleKeyDown}
                        onClick={e => e.target.select()}
                    />

                    <C.ThemeContainer>
                        <C.ThemeButton
                            theme={playerData[player].theme}
                            onClick={() => setOpenTheme({ ...openTheme, [player]: !openTheme[player] })}
                        />

                        <C.ThemeContent $open={openTheme[player]}>

                        </C.ThemeContent>
                    </C.ThemeContainer>
                </C.PlayerContainer>

                <C.ActivitiesContainer theme={playerData[player].theme}>
                    <ActivitiesList player={player} />
                </C.ActivitiesContainer>

            </C.Section>
        </C.Main>
    )
}