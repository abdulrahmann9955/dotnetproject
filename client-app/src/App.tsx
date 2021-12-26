import React, { useEffect, useState } from 'react'
import Header from './Header'
import './App.css'
import axios from 'axios'
import List from './List'

function App() {
    const [activities, setActivities] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/api/activities').then((response) => {
            console.log(response)
            setActivities(response.data)
        })
    }, [])
    return (
        <div className='App'>
            <Header />
            <List
                style={activities.map((activity: any) => (
                    <li key={activity.id}>{activity.title}</li>
                ))}
            ></List>
        </div>
    )
}

export default App
