import { createContext, useState } from "react"

export const GeneralContext = createContext({})

export const GeneralProvider = ({ children }) => {
    const [activities, setActivities] = useState({
        player1:
            [{ id: 1, name: 'Activity 1' }, { id: 2, name: 'Activity 2' }],
        player2:
            [{ id: 1, name: 'Activity 1' }, { id: 2, name: 'Activity 2' }]
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

    const findHighestId = (playerType) => {
        const playerActivities = activities[playerType]
        let highestId = 0

        playerActivities.forEach((activity) => {
            if (activity.id > highestId) {
                highestId = activity.id
            }
        });

        return highestId
    }

    const getActivityIndex = (playerType, id) => {
        const playerActivities = activities[playerType]
        const index = playerActivities.findIndex((activity) => activity.id === parseInt(id))
        return index !== -1 ? index : null
    }


    return (
        <GeneralContext.Provider value={{
            activities, setActivities,
            theme, setTheme, playerName, setPlayerName, findHighestId, getActivityIndex
        }}>
            {children}
        </GeneralContext.Provider>
    )
}