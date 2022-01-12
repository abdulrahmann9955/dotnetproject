import React from 'react'

interface Props {
    style: any
}

const Grid = (props: Props) => {
    return <div className='grid grid-cols-6'>{props.style}</div>
}

export default Grid
