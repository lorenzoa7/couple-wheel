import * as C from './styles'
import ActivitiesList from './ActivitiesList'
import usePlayer from '../../../hooks/usePlayer'
import { useState, useEffect, useRef } from 'react'

export default function GameConfiguration({ player = 'player1', mustSpin }) {

    const { playerData, setPlayerData, themes } = usePlayer()

    const [openTheme, setOpenTheme] = useState({ player1: false, player2: false })

    const themeContentRef = useRef()

    const handleChangeName = e =>
        setPlayerData({ ...playerData, [e.target.name]: { ...playerData[e.target.name], name: e.target.value } })

    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    const isThisThemeFromOtherPlayer = (player, theme) => {
        const otherPlayer = player === 'player1' ? 'player2' : 'player1'
        return playerData[otherPlayer].theme === theme
    }

    useEffect(() => {
        let handler = e => {
            if (!themeContentRef.current.contains(e.target))
                setOpenTheme({ ...openTheme, [player]: false })
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

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

                        <C.ThemeContent name='themeContent' $open={openTheme[player]} ref={themeContentRef}>
                            <C.ThemeName theme={playerData[player].theme}>{playerData[player].theme.toUpperCase()}</C.ThemeName>
                            <C.ThemeColors>
                                {themes['name'].map((theme, index) =>
                                    <C.ThemeBox
                                        $selected={playerData[player].theme === theme}
                                        $is_disabled={isThisThemeFromOtherPlayer(player, theme)}
                                        theme={theme}
                                        key={index}
                                        onClick={!isThisThemeFromOtherPlayer(player, theme) ? () => setPlayerData({ ...playerData, [player]: { ...playerData[player], theme: theme } }) : null}
                                    />
                                )}
                            </C.ThemeColors>
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