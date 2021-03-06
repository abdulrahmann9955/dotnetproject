import React from 'react'
import Button from '@material-tailwind/react/Button'

interface Props {
    value: any
}

export default function Buttons({ value }: Props) {
    return (
        <Button
            color='green'
            buttonType='filled'
            size='regular'
            rounded={false}
            block={false}
            iconOnly={false}
            ripple='light'
        >
            {value}
        </Button>
    )
}
