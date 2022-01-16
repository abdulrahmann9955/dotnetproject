import React from 'react'

interface Props {
    value: any
    onClick: () => void
    className: any
}

const TailwindButton = ({ value, onClick, className }: Props) => {
    return (
        <button onClick={onClick} className={className}>
            {value}
        </button>
    )
}

export default TailwindButton
