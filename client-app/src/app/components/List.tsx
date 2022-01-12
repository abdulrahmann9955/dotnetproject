import React from 'react'

interface Props {
    style: any
}

const List = (props: Props) => {
    return (
        <div className='flex items-center justify-center h-screen bg-slateblue-500'>
            <div className='container'>
                <div className='flex justify-center'>
                    <div>
                        <ul className='divide-y divide-gray-300'>
                            <li className='p-4 text-black divide-y divide-gray-200'>
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
