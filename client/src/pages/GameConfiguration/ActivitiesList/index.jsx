import { useState } from 'react'
import * as C from '../styles'

export default function ActivitiesList() {

    const [activities, setActivities] = useState([{name: 'Activity 1'}, {name: 'Activity 2'}])

    const addActivity = () => {
        const newActivity = {name: `Activity ${activities.length + 1}`}
        setActivities(activities.concat(newActivity))
    }

    return (
        <>
            {activities?.map((activity, index) => <C.Activity key={index}>{activity.name}</C.Activity>)}

            <C.AddActivity onClick={addActivity}>+</C.AddActivity>
        </>
    )
}