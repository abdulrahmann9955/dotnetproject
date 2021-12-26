import React from 'react'
import App from './App'

interface Props {
    style: any
}

const List = (props: Props) => {
    return (
        <div className='flex items-center justify-center h-screen bg-slateblue-500'>
            <div className='container'>
                <div className='flex justify-center'>
                    <div className='bg-white shadow-xl rounded-lg w-1/2'>
                        <ul className='divide-y divide-gray-300'>
                            <li className='p-4 hover:bg-gray-50 cursor-pointer'>
                                {props.style}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
