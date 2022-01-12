import React from 'react'
import Button from '@material-tailwind/react/Button'

export default function Buttons() {
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
            Button
        </Button>
    )
}
