import * as C from '../styles'
import useGeneral from '../../../hooks/useGeneral'

export default function ActivitiesList({ player = 'player1' }) {

    const { activities, setActivities, theme, findHighestId, getActivityIndex } = useGeneral()

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

    return (
        <>
            {activities[player]?.map((activity, index) =>
                <C.Activity theme={theme[player]} key={index}>
                    <C.ActivityInput
                        id={activity.id}
                        value={activity.name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onClick={e => e.target.select()}
                        onBlur={handleBlur}
                    />
                </C.Activity>
            )}

            <C.AddActivity theme={theme[player]} onClick={addActivity}>+</C.AddActivity>
        </>
    )
}