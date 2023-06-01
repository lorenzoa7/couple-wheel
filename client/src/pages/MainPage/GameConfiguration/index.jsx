import * as C from './styles'
import ActivitiesList from './ActivitiesList'
import usePlayer from '../../../hooks/usePlayer'

export default function GameConfiguration({ player = 'player1', mustSpin }) {

    const { playerData, setPlayerData } = usePlayer()

    const handleChangeName = e =>
        setPlayerData({ ...playerData, [e.target.name]: { ...playerData[e.target.name], name: e.target.value } })

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

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

                    <C.ThemeButton theme={playerData[player].theme}>
                        Theme
                    </C.ThemeButton>
                </C.PlayerContainer>

                <C.ActivitiesContainer theme={playerData[player].theme}>
                    <ActivitiesList player={player} />
                </C.ActivitiesContainer>

            </C.Section>
        </C.Main>
    )
}