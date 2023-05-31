import * as C from '../styles'
import useGeneral from '../../../hooks/useGeneral'

export default function ActivitiesList({player='player1'}) {

    const { activities, setActivities, theme } = useGeneral()

    const addActivity = () => {
        const newActivity = {name: `Activity ${activities[player].length + 1}`}
        setActivities({...activities, [player]: activities[player].concat(newActivity)})
    }

    return (
        <>
            {activities[player]?.map((activity, index) => <C.Activity theme={theme[player]} key={index}>{activity.name}</C.Activity>)}

            <C.AddActivity theme={theme[player]} onClick={addActivity}>+</C.AddActivity>
        </>
    )
}