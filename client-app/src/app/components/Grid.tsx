import React from 'react'

interface Props {
    style: any
}

const Grid = ({ style }: Props) => {
    return <div className='grid grid-cols-1'>{style}</div>
}

export default Grid
