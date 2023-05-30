import * as C from './styles'

export default function GameConfiguration() {

    return (
        <C.PageContainer>
            <C.AppTitle>Roleta do Casal</C.AppTitle>
            <C.Main>
                <C.Section>
                    <C.PlayerContainer>
                        <p>Player 1</p>
                    </C.PlayerContainer>

                    <C.ActivitiesContainer>
                        <C.Activity>
                            Atividade 1
                        </C.Activity>

                        <C.Activity>
                            Atividade 2
                        </C.Activity>

                        <C.AddActivity>+</C.AddActivity>
                    </C.ActivitiesContainer>
                </C.Section>

                <C.Section>
                    <C.PlayerContainer color={'blue'}>
                        <p>Player 2</p>
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
        </C.PageContainer>
    )
}