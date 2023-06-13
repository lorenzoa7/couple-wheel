import { createContext, useCallback, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import flag_us from '../assets/flag_us.svg'
import flag_br from '../assets/flag_br.svg'
import flag_es from '../assets/flag_es.svg'

export const PlayerContext = createContext({})

export const PlayerProvider = ({ children }) => {

    /*
    Example Player Data:

        {
            player1: {
                name: "Player 1",
                theme: "pink",
                coins: 0,
                activities: [
                    {
                        id: 1,
                        name: "Assistir Star Wars",
                        reroll_cost: 1,
                        weight: 1
                    }
                ]
            },
            
            player2: {
                name: "Player 2",
                theme: "blue",
                coins: 0,
                activities: [
                    {
                        id: 1,
                        name: "Jogar God of War",
                        reroll_cost: 1,
                        weight: 1
                    }
                ]
            }
        } 
    
    */

    const { t } = useTranslation()
    const [message, setMessage] = useState({text: '', type: ''})

    const languageOptions = [
        {
            name: "English",
            value: "en",
            flag: flag_us
        },
        {
            name: "Português",
            value: "pt",
            flag: flag_br
        },
        {
            name: "Español",
            value: "es",
            flag: flag_es
        }
    ]

    const defaultData = {
        player1: {
            name: t('player_data.player1_name'),
            theme: "blue",
            coins: 10,
            activities: []
        },

        player2: {
            name: t('player_data.player2_name'),
            theme: "pink",
            coins: 10,
            activities: []
        },
    }

    const defaultConfigData = {
        collected_coins: {
            drawn_player: 1,
            opposite_player: 2
        },
        reroll_skill_cost: 1,
        reset_weight_multiplier: 1,
        reroll_increase_multiplier: 1,
        reroll_decrease_multiplier: 1,
        weight_decrease_multiplier: 1,
    }

    const [configData, setConfigData] = useState(
        localStorage.getItem('configData') 
            ? JSON.parse(localStorage.getItem('configData'))
            : defaultConfigData
    )

    const [playerData, setPlayerData] = useState(
        localStorage.getItem('playerData')
            ? JSON.parse(localStorage.getItem('playerData'))
            : defaultData)

    const findHighestId = (player) => {
        const playerActivities = playerData[player].activities
        let highestId = 0

        playerActivities.forEach((activity) => {
            if (activity.id > highestId) {
                highestId = activity.id
            }
        });

        return highestId
    }

    const getActivityIndex = (player, id) => {
        const playerActivities = playerData[player].activities
        const index = playerActivities.findIndex((activity) => activity.id === parseInt(id))
        return index !== -1 ? index : null
    }

    const findActivityById = (player, id) => {
        const playerActivities = playerData[player].activities
        return playerActivities.find(activity => activity.id === id)
    }

    const clampText = (text, maxLength) => {
        if (`${text}...`.length <= maxLength) return text

        return text.substring(0, maxLength - 3) + '...'
    }

    const savePlayerData = useCallback(() => {
        const jsonPlayerData = JSON.stringify(playerData)

        localStorage.setItem('playerData', jsonPlayerData)
    }, [playerData])

    const saveConfigData = useCallback(() => {
        const jsonConfigData = JSON.stringify(configData)

        localStorage.setItem('configData', jsonConfigData)
    }, [configData])

    const themes = {
        name: [
            'blue', 'green', 'lime',
            'orange', 'pink', 'purple',
            'red', 'teal', 'yellow'
        ],
        hex: [
            '#60a5fa', '#4ade80', '#a3e635',
            '#fb923c', '#f472b6', '#c084fc',
            '#f87171', '#2dd4bf', '#facc15'
        ]
    }

    const translateTheme = theme => {
        switch (theme) {
            case 'blue':
                return t('player_data.themes.theme_blue')
            case 'green':
                return t('player_data.themes.theme_green')
            case 'lime':
                return t('player_data.themes.theme_lime')
            case 'orange':
                return t('player_data.themes.theme_orange')
            case 'pink':
                return t('player_data.themes.theme_pink')
            case 'purple':
                return t('player_data.themes.theme_purple')
            case 'red':
                return t('player_data.themes.theme_red')
            case 'teal':
                return t('player_data.themes.theme_teal')
            case 'yellow':
                return t('player_data.themes.theme_yellow')
            default:
                return t('player_data.themes.theme_pink')
        }
    }

    useEffect(() => savePlayerData(), [savePlayerData])
    useEffect(() => saveConfigData(), [saveConfigData])

    return (
        <PlayerContext.Provider value={{
            playerData, setPlayerData, languageOptions, clampText,
            findHighestId, getActivityIndex, translateTheme,
            savePlayerData, findActivityById, themes, defaultData,
            message, setMessage, configData, setConfigData, defaultConfigData
        }}>
            {children}
        </PlayerContext.Provider>
    )
}