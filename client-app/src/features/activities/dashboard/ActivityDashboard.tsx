import React from 'react'
import Grid from '../../../app/components/Grid'
import List from '../../../app/components/List'
import Activity from '../../../app/models/Activity'
import ItemView from '../../../app/components/ItemView'

interface Props {
    activities: Activity[]
}

const ActivityDashboard = ({ activities }: Props) => {
    return (
        <>
            <Grid
                style={
                    <List style={<ItemView activities={activities} />}></List>
                }
            ></Grid>
        </>
    )
}

export default ActivityDashboard
