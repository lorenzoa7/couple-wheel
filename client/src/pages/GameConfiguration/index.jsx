import { useState } from 'react'
import * as C from './styles'
import ActivitiesList from './ActivitiesList'

export default function GameConfiguration() {

    const [playerName, setPlayerName] = useState({ player1: 'Player 1', player2: 'Player 2' })

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
                        <C.PlayerContainer>
                            <C.PlayerInput
                                name='player1'
                                value={playerName.player1}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                                onBlur={handleBlur}
                            />
                        </C.PlayerContainer>

                        <C.ActivitiesContainer>
                            <ActivitiesList />
                        </C.ActivitiesContainer>
                    </C.Section>

                    <C.Section>
                        <C.PlayerContainer color={'blue'}>
                            <C.PlayerInput
                                name='player2'
                                value={playerName.player2}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                                onBlur={handleBlur}
                            />
                        </C.PlayerContainer>

                        <C.ActivitiesContainer color={'blue'}>
                            <C.Activity color={'blue'}>
                                Atividade 1
                            </C.Activity>

                            <C.Activity color={'blue'}>
                                Atividade 2
                            </C.Activity>

                            <C.Activity color={'blue'}>
                                Atividade 3
                            </C.Activity>

                            <C.AddActivity color={'blue'}>+</C.AddActivity>
                        </C.ActivitiesContainer>
                    </C.Section>
                </C.Main>
            </C.PageContent>
        </C.PageContainer>
    )
}