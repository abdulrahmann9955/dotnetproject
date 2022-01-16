import React from 'react'
import Activity from '../../../app/models/Activity'
import TailwindButton from '../../../app/components/TailwindButton'

interface Props {
    activity: Activity
    cancelActivity: () => void
    openForm: (id: string) => void
}

const ActivityDetails = ({ activity, cancelActivity, openForm }: Props) => {
    return (
        <div
            id='whoobe-3fery'
            className='w-96 md:w-64 justify-center items-center bg-white shadow-lg rounded-lg flex flex-col'
        >
            {/* <img
                src='../../../assets/categoryImages/culture.jpg'
                alt='img'
                title='img'
                className='w-full h-auto object-cover rounded-t-lg'
                id='whoobe-ixxe5'
            /> */}
            <div
                id='whoobe-1okdg'
                className='w-full p-4 justify-start flex flex-col'
            >
                <h4 className='border-b-2 text-3xl' id='whoobe-3mr7n'>
                    {activity.title}
                </h4>
                <p className='my-4' id='whoobe-950fw'>
                    {activity.date}
                </p>
                <p>{activity.description}</p>
                <div className='flex mt-4 space-x-3 lg:mt-6'>
                    <TailwindButton
                        className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        value={'Edit'}
                        onClick={() => openForm(activity.id)}
                    ></TailwindButton>
                    <TailwindButton
                        onClick={cancelActivity}
                        className='inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        value={'Cancel'}
                    ></TailwindButton>
                </div>
            </div>
        </div>
    )
}

export default ActivityDetails
