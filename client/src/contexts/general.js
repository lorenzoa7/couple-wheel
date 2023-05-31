import { createContext, useState } from "react"

export const GeneralContext = createContext({})

export const GeneralProvider = ({ children }) => {

    const [playerData, setPlayerData] = useState({
        player1: {
            name: "Player 1",
            theme: "rose",
            coins: 0,
            activities: [
                {
                    id: 1,
                    name: "Assistir Star Wars",
                    reroll_cost: 1,
                    weight: 10
                },
                {
                    id: 2,
                    name: "Jogar God of War",
                    reroll_cost: 1,
                    weight: 10
                }
            ]
        },

        player2: {
            name: "Player 2",
            theme: "cyan",
            coins: 0,
            activities: [
                {
                    id: 1,
                    name: "Assistir Game of Thrones",
                    reroll_cost: 1,
                    weight: 10
                },
                {
                    id: 2,
                    name: "Assistir Xuxa",
                    reroll_cost: 1,
                    weight: 10
                },
                {
                    id: 3,
                    name: "Jantar no Gendai",
                    reroll_cost: 1,
                    weight: 10
                },
            ]
        },
    })

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
            theme, setTheme, playerName, setPlayerName, findHighestId, getActivityIndex,
            playerData, setPlayerData
        }}>
            {children}
        </GeneralContext.Provider>
    )
}