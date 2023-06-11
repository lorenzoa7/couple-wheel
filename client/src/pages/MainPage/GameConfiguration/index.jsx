import * as C from './styles'
import ActivitiesList from './ActivitiesList'
import usePlayer from '../../../hooks/usePlayer'
import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function GameConfiguration({ player = 'player1', mustSpin, visible=true }) {

    const { playerData, setPlayerData, themes, translateTheme } = usePlayer()
    const { t } = useTranslation()
    const [openTheme, setOpenTheme] = useState(false)

    const themeContainerRef = useRef()

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
            if (!themeContainerRef.current.contains(e.target))
                setOpenTheme(false)
        }

        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })

    return (
        <C.Main $visible={visible} $spinning={mustSpin}>
            <C.Section>
                <C.PlayerContainer theme={playerData[player].theme}>
                    <C.PlayerInput
                        name={player}
                        value={playerData[player].name}
                        onChange={handleChangeName}
                        onKeyDown={handleKeyDown}
                        onClick={e => e.target.select()}
                    />

                    <C.Coin>
                        {playerData[player].coins}
                    </C.Coin>

                    <C.ThemeContainer ref={themeContainerRef}>

                        <C.ThemeButton
                            theme={playerData[player].theme}
                            onClick={() => setOpenTheme(!openTheme)}
                        >{t('player_data.themes.theme_label')}</C.ThemeButton>

                        <C.ThemeContent name='themeContent' $open={openTheme}>
                            <C.ThemeName theme={playerData[player].theme}>{translateTheme(playerData[player].theme).toUpperCase()}</C.ThemeName>
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