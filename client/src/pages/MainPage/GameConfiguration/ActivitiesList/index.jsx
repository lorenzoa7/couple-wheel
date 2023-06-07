import * as C from '../styles'
import usePlayer from '../../../../hooks/usePlayer'
import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'

export default function ActivitiesList({ player = 'player1' }) {

    const { findHighestId, getActivityIndex, playerData, setPlayerData } = usePlayer()

    const [hover, setHover] = useState(0)

    const handleChange = e => {
        const { id, value } = e.target
        const playerActivities = playerData[player].activities
        const activityIndex = getActivityIndex(player, id)

        if (activityIndex !== -1) {
            const updatedActivities = [...playerActivities]
            updatedActivities[activityIndex] = {
                ...updatedActivities[activityIndex],
                name: value,
            }

            setPlayerData({ ...playerData, [player]: { ...playerData[player], activities: updatedActivities } })
        }
    }


    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    const addActivity = () => {
        const newActivity = { id: findHighestId(player) + 1, name: `Activity ${playerData[player].activities.length + 1}`, reroll_cost: 2, weight: 10 }
        setPlayerData({ ...playerData, [player]: { ...playerData[player], activities: playerData[player].activities.concat(newActivity) } })
    }

    const deleteActivity = (player, activityId) => {
        const playerActivities = playerData[player].activities
        const updatedActivities = playerActivities.filter((activity) => activity.id !== activityId)

        setPlayerData({ ...playerData, [player]: { ...playerData[player], activities: updatedActivities } })
    }

    return (
        <>
            <C.AddActivity theme={playerData[player].theme} onClick={addActivity}>+</C.AddActivity>
            {playerData[player].activities.length === 0 ? (
                <C.Label theme={playerData[player].theme}>Click the button below to create a new activity</C.Label>
            ) : (
                playerData[player].activities?.map((activity, index) => (
                    <C.ActivitySection>
                        <C.WeightBox theme={playerData[player].theme}>
                            {activity.weight}
                        </C.WeightBox>
                        <C.Activity theme={playerData[player].theme} key={index}
                            onMouseEnter={() => setHover(activity.id)}
                            onMouseLeave={() => setHover(0)}>

                            <C.ActivityInput
                                id={activity.id}
                                value={activity.name}
                                onChange={handleChange}
                                onKeyDown={handleKeyDown}
                                onClick={e => e.target.select()}
                            />
                            <C.DeleteActivity theme={playerData[player].theme} $hover={hover === activity.id} onClick={() => deleteActivity(player, activity.id)}>
                                <AiFillDelete size={'75%'} />
                            </C.DeleteActivity>
                        </C.Activity>
                    </C.ActivitySection>
                )))
            }
        </>
    )
}