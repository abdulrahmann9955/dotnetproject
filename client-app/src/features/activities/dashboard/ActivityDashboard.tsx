import React from 'react'
import Grid from '../../../app/components/Grid'
import List from '../../../app/components/List'
import Activity from '../../../app/models/Activity'
import ItemView from '../../../app/components/ItemView'
import ActivityDetails from '../../activities/details/ActivityDetails'
import ActivitiesForm from '../form/ActivitiesForm'

interface Props {
    activities: Activity[]
    selectActivity: Activity | undefined
    handleSelectActivity: (id: string) => void
    cancelActivity: () => void
    editForm: boolean
    handleFormOpen: (id: string) => void
    handleFormClose: () => void
    handleCreateOrEditActivity: (activity: Activity) => void
    deleteHander: (id: string) => void
}

const ActivityDashboard = ({
    activities,
    selectActivity,
    handleSelectActivity,
    cancelActivity,
    editForm,
    handleFormOpen,
    handleFormClose,
    handleCreateOrEditActivity,
    deleteHander,
}: Props) => {
    return (
        <>
            <Grid
                style={
                    <>
                        <List
                            style={
                                <ItemView
                                    activities={activities}
                                    handleSelectActivity={handleSelectActivity}
                                    deleteHander={deleteHander}
                                />
                            }
                            styles={undefined}
                        ></List>

                        <List
                            style={
                                selectActivity &&
                                !editForm && (
                                    <ActivityDetails
                                        activity={selectActivity}
                                        cancelActivity={cancelActivity}
                                        openForm={handleFormOpen}
                                    />
                                )
                            }
                            styles={
                                editForm && (
                                    <ActivitiesForm
                                        closeForm={handleFormClose}
                                        activity={selectActivity}
                                        createOrEdit={
                                            handleCreateOrEditActivity
                                        }
                                    />
                                )
                            }
                        ></List>
                    </>
                }
            ></Grid>
        </>
    )
}

export default ActivityDashboard
