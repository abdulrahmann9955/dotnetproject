import React, { ChangeEvent, useState } from 'react'
import Activity from '../../../app/models/Activity'

interface Props {
    activity: Activity | undefined
    closeForm: () => void
    createOrEdit: (activity: Activity) => void
}

const ActivitiesForm = ({
    closeForm,
    activity: selectedActivities,
    createOrEdit,
}: Props) => {
    const initialState = selectedActivities ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
    }

    const [activity, setActivity] = useState(initialState)

    const handleSubmit = (e: any) => {
        createOrEdit(activity)
        e.preventDefault()
    }

    const handleInputChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setActivity({ ...activity, [name]: value })
    }

  
    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className='flex items-center justify-center mt-5'>
                <div className='bg-white py-6 rounded-md px-10 max-w-lg shadow-md'>
                    {/* <h1 className="text-center text-lg font-bold text-gray-500">Form Register</h1> */}
                    <div className='space-y-4 mt-6'>
                        <div className='w-full'>
                            <input
                                type='text'
                                placeholder='Title'
                                className='px-4 py-2 bg-gray-50'
                                onChange={handleInputChange}
                                value={activity.title}
                                name='title'
                            />
                        </div>
                        <div className='w-full'>
                            <textarea
                                className='textarea h-24 bg-slate-50'
                                placeholder='Description'
                                onChange={handleInputChange}
                                value={activity.description}
                                name='description'
                            ></textarea>
                        </div>
                        <div className='w-full'>
                            <input
                                type='text'
                                placeholder='Category'
                                className='px-4 py-2 bg-gray-50'
                                onChange={handleInputChange}
                                value={activity.category}
                                name='category'
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                type='date'
                                placeholder='Date'
                                className='px-4 py-2 bg-gray-50'
                                onChange={handleInputChange}
                                value={activity.date}
                                name='date'
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                type='text'
                                placeholder='City'
                                className='px-4 py-2 bg-gray-50'
                                onChange={handleInputChange}
                                value={activity.city}
                                name='city'
                            />
                        </div>
                        <div className='w-full'>
                            <input
                                type='text'
                                placeholder='Venue'
                                className='px-4 py-2 bg-gray-50'
                                onChange={handleInputChange}
                                value={activity.venue}
                                name='venue'
                            />
                        </div>
                    </div>
                    <div className='inline-block'>
                        <button className='w-24 mt-5  bg-green-700 mr-2 text-white py-2 rounded-md font-semibold tracking-tight'>
                            Submit
                        </button>
                        <button
                            onClick={closeForm}
                            className='w-24 mt-5 bg-red-600 text-white py-2 rounded-md font-semibold tracking-tight'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default ActivitiesForm
