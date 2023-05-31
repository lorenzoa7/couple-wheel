import * as C from './styles'
import ActivitiesList from './ActivitiesList'
import useGeneral from '../../hooks/useGeneral'

export default function GameConfiguration() {

    const { theme, playerName, setPlayerName } = useGeneral()

    const handleChange = e => setPlayerName({ ...playerName, [e.target.name]: e.target.value })

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    const handleBlur = () => {
        // API save
    }


    return (
        <C.PageContainer>
            <C.AppTitle>Roleta do Casal</C.AppTitle>
            <C.PageContent>
                <C.Main>
                    <C.Section>
                        <C.PlayerContainer theme={theme.player1}>
                            <C.PlayerInput
                                name='player1'
                                value={playerName.player1}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                                onBlur={handleBlur}
                            />
                        </C.PlayerContainer>

                        <C.ActivitiesContainer theme={theme.player1}>
                            <ActivitiesList player='player1' />
                        </C.ActivitiesContainer>
                    </C.Section>

                    <C.Section>
                        <C.PlayerContainer theme={theme.player2}>
                            <C.PlayerInput
                                name='player2'
                                value={playerName.player2}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                                onBlur={handleBlur}
                            />
                        </C.PlayerContainer>

                        <C.ActivitiesContainer theme={theme.player2}>
                            <ActivitiesList player='player2' />
                        </C.ActivitiesContainer>
                    </C.Section>
                </C.Main>
            </C.PageContent>
        </C.PageContainer>
    )
}