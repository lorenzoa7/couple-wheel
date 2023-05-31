import { createContext, useState } from "react"

export const GeneralContext = createContext({})

export const GeneralProvider = ({ children }) => {
    const [activities, setActivities] = useState({
        player1:
            [{ name: 'Activity 1' }, { name: 'Activity 2' }],
        player2:
            [{ name: 'Activity 1' }, { name: 'Activity 2' }]
    })

    const [theme, setTheme] = useState({
        player1:
            'rose',
        player2:
            'cyan'
    })

    const [playerName, setPlayerName] = useState({
        player1:
            'Player 1',
        player2:
            'Player 2'
    })

    return (
        <GeneralContext.Provider value={{
            activities, setActivities,
            theme, setTheme, playerName, setPlayerName
        }}>
            {children}
        </GeneralContext.Provider>
    )
}