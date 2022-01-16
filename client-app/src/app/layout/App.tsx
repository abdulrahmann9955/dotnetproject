import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ResponsiveNavBar from '../components/Navbar'
import Activity from '../models/Activity'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'
import { v4 as uuid } from 'uuid'

function App() {
    const [activities, setActivities] = useState<Activity[]>([])
    const [selectedActivity, setSelectedActivity] = useState<
        Activity | undefined
    >(undefined)
    const [editForm, setEditForm] = useState(false)

    useEffect(() => {
        axios
            .get<Activity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                console.log(response)
                setActivities(response.data)
            })
    }, [])

    const handleSelectedActivity = (id: string) => {
        setSelectedActivity(activities.find((x) => x.id === id))
    }

    const handleCancelSelectedActivity = () => {
        setSelectedActivity(undefined)
    }

    const handleFormOpen = (id?: string) => {
        id ? handleSelectedActivity(id) : handleCancelSelectedActivity()
        setEditForm(true)
    }

    const handleFormClose = () => {
        setEditForm(false)
    }

    const handleCreateOrEditActivity = (activity: Activity) => {
        activity.id
            ? setActivities([
                  ...activities.filter((x) => x.id !== activity.id),
                  activity,
              ])
            : setActivities([...activities, { ...activity, id: uuid() }])
        setEditForm(false)
        setSelectedActivity(activity)
    }

    const deleteHander = (id: string) => {
        setActivities([...activities.filter((x) => x.id !== id)])
    }

    return (
        <div className='App bg-slate-50'>
            <ResponsiveNavBar openForm={handleFormOpen} />

            <ActivityDashboard
                activities={activities}
                selectActivity={selectedActivity}
                handleSelectActivity={handleSelectedActivity}
                cancelActivity={handleCancelSelectedActivity}
                editForm={editForm}
                handleFormOpen={handleFormOpen}
                handleFormClose={handleFormClose}
                handleCreateOrEditActivity={handleCreateOrEditActivity}
                deleteHander={deleteHander}
            />
        </div>
    )
}

export default App
