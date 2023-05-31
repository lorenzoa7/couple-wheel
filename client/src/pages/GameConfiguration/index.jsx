import * as C from './styles'
import ActivitiesList from './ActivitiesList'
import usePlayer from '../../hooks/usePlayer'

export default function GameConfiguration() {

    const { playerData, setPlayerData } = usePlayer()
    
    const handleChangeName = e => 
        setPlayerData({ ...playerData, [e.target.name]: {...playerData[e.target.name], name: e.target.value} })

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    return (
        <C.PageContainer>
            <C.AppTitle>Roleta do Casal</C.AppTitle>
            <C.PageContent>
                <C.Main>
                    <C.Section>
                        <C.PlayerContainer theme={playerData.player1.theme}>
                            <C.PlayerInput
                                name='player1'
                                value={playerData.player1.name}
                                onChange={handleChangeName}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                            />
                        </C.PlayerContainer>

                        <C.ActivitiesContainer theme={playerData.player1.theme}>
                            <ActivitiesList player='player1' />
                        </C.ActivitiesContainer>
                    </C.Section>

                    <C.Section>
                        <C.PlayerContainer theme={playerData.player2.theme}>
                            <C.PlayerInput
                                name='player2'
                                value={playerData.player2.name}
                                onChange={handleChangeName}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                            />
                        </C.PlayerContainer>

                        <C.ActivitiesContainer theme={playerData.player2.theme}>
                            <ActivitiesList player='player2' />
                        </C.ActivitiesContainer>
                    </C.Section>
                </C.Main>
            </C.PageContent>
        </C.PageContainer>
    )
}