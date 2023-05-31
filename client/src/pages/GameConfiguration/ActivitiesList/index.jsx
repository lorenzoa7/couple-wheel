import * as C from '../styles'
import useGeneral from '../../../hooks/useGeneral'
import { AiFillDelete } from 'react-icons/ai'
import { useState } from 'react'

export default function ActivitiesList({ player = 'player1' }) {

    const { activities, setActivities, theme, findHighestId, getActivityIndex } = useGeneral()

    const [hover, setHover] = useState(0)

    const handleChange = e => {
        const { id, value } = e.target
        const playerActivities = activities[player]
        const activityIndex = getActivityIndex(player, id)

        if (activityIndex !== -1) {
            const updatedActivities = [...playerActivities];
            updatedActivities[activityIndex] = {
                ...updatedActivities[activityIndex],
                name: value,
            }

            setActivities({ ...activities, [player]: updatedActivities });
        }
    };


    const handleKeyDown = e => {
        if (e.key === 'Enter') {
            e.target.blur()
        }
    }

    const handleBlur = () => {
        // API save
    }

    const addActivity = () => {
        const newActivity = { id: findHighestId(player) + 1, name: `Activity ${activities[player].length + 1}` }
        setActivities({ ...activities, [player]: activities[player].concat(newActivity) })
    }

    const deleteActivity = (player, activityId) => {
        const playerActivities = activities[player]
        const updatedActivities = playerActivities.filter((activity) => activity.id !== activityId)
      
        setActivities({ ...activities, [player]: updatedActivities });
      }
      

    return (
        <>
            {activities[player]?.map((activity, index) =>
                <C.Activity theme={theme[player]} key={index}
                    onMouseEnter={() => setHover(activity.id)}
                    onMouseLeave={() => setHover(0)}>

                    <C.ActivityInput
                        id={activity.id}
                        value={activity.name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onClick={e => e.target.select()}
                        onBlur={handleBlur}
                    />
                    <C.DeleteActivity theme={theme[player]} $hover={hover === activity.id} onClick={() => deleteActivity(player, activity.id)}>
                        <AiFillDelete size={'75%'} />
                    </C.DeleteActivity>
                </C.Activity>
            )}

            <C.AddActivity theme={theme[player]} onClick={addActivity}>+</C.AddActivity>
        </>
    )
}