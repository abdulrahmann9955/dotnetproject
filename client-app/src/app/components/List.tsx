import React from 'react'

interface Props {
    style: any
    styles: any
}

const List = ({ style, styles }: Props) => {
    return (
        <div className='flex justify-center  bg-slateblue-500'>
            <div className='container'>
                <div className='flex justify-center'>
                    <div>
                        <ul className='divide-y divide-gray-300'>
                            <li className='p-4 text-black divide-y divide-gray-200'>
                                {style}
                                {styles}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default List
