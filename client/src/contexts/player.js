import { createContext, useState } from "react"

export const PlayerContext = createContext({})

export const PlayerProvider = ({ children }) => {

    const [playerData, setPlayerData] = useState(
        localStorage.getItem('playerData') ?
            JSON.parse(localStorage.getItem('playerData')) :
            {
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

    const savePlayerData = () => {
        const jsonPlayerData = JSON.stringify(playerData)

        localStorage.setItem('playerData', jsonPlayerData)
    }


    return (
        <PlayerContext.Provider value={{
            playerData, setPlayerData,
            findHighestId, getActivityIndex,
            savePlayerData,
        }}>
            {children}
        </PlayerContext.Provider>
    )
}