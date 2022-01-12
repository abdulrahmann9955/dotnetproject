import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ItemView from '../components/ItemView'
import ResponsiveNavBar from '../components/Navbar'
import Activity from '../models/Activity'
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard'

function App() {
    const [activities, setActivities] = useState<Activity[]>([])
    useEffect(() => {
        axios
            .get<Activity[]>('http://localhost:5000/api/activities')
            .then((response) => {
                console.log(response)
                setActivities(response.data)
            })
    }, [])
    return (
        <div className='App bg-slate-50'>
            <ResponsiveNavBar />

            <ActivityDashboard activities={activities} />
        </div>
    )
}

export default App
