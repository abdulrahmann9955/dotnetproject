import React from 'react'
import Acitivity from '../../app/models/Activity'
import Buttons from '../components/Button'
import TailwindButton from '../components/TailwindButton'

interface Props {
    activities: Acitivity[]
    handleSelectActivity: (id: string) => void
    deleteHander: (id: string) => void
}

const ItemView = ({
    activities,
    handleSelectActivity,
    deleteHander,
}: Props) => {
    return (
        <>
            {activities.map((activity: any) => (
                <div
                    key={activity.id}
                    className='card-body bg-white rounded-lg shadow-sm hover:shadow-lg duration-500 px-2 sm:px-6 md:px-2 py-4 my-6'
                >
                    <div className='grid grid-cols-12 gap-3'>
                        <div className='col-span-0 sm:col-span-2 text-center hidden sm:block'></div>
                    </div>

                    <div className='col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0'>
                        <div className='grid block sm:hidden'>
                            <div className='flex-wrap inline-block'>
                                <div className='mr-2'>
                                    <div className='inline-block font-light capitalize'>
                                        <i className='uil uil-arrow-circle-up mr-1'></i>
                                        <span className='text-l font-bold'>
                                            {activity.title}
                                        </span>
                                    </div>
                                </div>
                                <div className='mr-2'>
                                    <div className='inline-block font-light capitalize'>
                                        <i className='uil uil-check-circle mr-1'></i>
                                        <span className='text-sm'>
                                            {activity.date}
                                        </span>
                                    </div>
                                </div>
                                <div className='mr-2'>
                                    <div className='inline-block'>
                                        <i className='uil uil-eye mr-1'></i>
                                        <span className='text-sm capitalize font-light'>
                                            {activity.description}
                                        </span>
                                    </div>
                                </div>

                                <div className='mr-2'>
                                    <div className='inline-block'>
                                        <i className='uil uil-clock mr-1'></i>
                                        <span className='text-sm font-light'>
                                            {activity.city},{activity.venue}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='grid grid-cols-2 mt-4 my-auto'>
                            <div className='col-span-12 lg:col-span-8'>
                                <a
                                    href='#'
                                    className='inline-block rounded-full text-white 
                                       bg-green-400 hover:bg-green-500 duration-300 
                                       text-xs font-bold 
                                       mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                                       opacity-90 hover:opacity-100'
                                >
                                    {activity.category}
                                </a>

                                <div>
                                    <a href='#' className='flex justify-end'>
                                        <TailwindButton
                                            className='py-2.5 px-6 mr-3 text-white rounded-lg bg-green-400 hover:bg-green-600 shadow-lg block md:inline-block'
                                            onClick={() =>
                                                handleSelectActivity(
                                                    activity.id
                                                )
                                            }
                                            value={'View'}
                                        />

                                        <TailwindButton
                                            className='py-2.5 px-6 text-white rounded-lg bg-red-600 hover:bg-red-400 shadow-lg block md:inline-block'
                                            onClick={() =>
                                                deleteHander(activity.id)
                                            }
                                            value={'Delete'}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ItemView
