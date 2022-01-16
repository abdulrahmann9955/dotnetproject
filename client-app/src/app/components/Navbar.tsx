import React, { useState } from 'react'
import Navbar from '@material-tailwind/react/Navbar'
import NavbarContainer from '@material-tailwind/react/NavbarContainer'
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper'
import NavbarBrand from '@material-tailwind/react/NavbarBrand'
import NavbarToggler from '@material-tailwind/react/NavbarToggler'
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse'
import Nav from '@material-tailwind/react/Nav'
import NavItem from '@material-tailwind/react/NavItem'
import NavLink from '@material-tailwind/react/NavLink'
import TailwindButton from './TailwindButton'

import { FcConferenceCall } from 'react-icons/fc'

interface Props {
    openForm: () => void
}

export default function ResponsiveNavBar({ openForm }: Props) {
    const [openNavbar, setOpenNavbar] = useState(false)

    return (
        <Navbar color='indigo' navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <NavbarBrand>
                        <FcConferenceCall className='text-5xl' />
                    </NavbarBrand>
                    <NavbarToggler
                        color='white'
                        onClick={() => setOpenNavbar(!openNavbar)}
                        ripple='light'
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav leftSide>
                        <NavLink href='#navbar' ripple='light'>
                            Activities
                        </NavLink>
                        <NavItem ripple='light'>
                            <TailwindButton
                                value={'Add Activity'}
                                className='py-2.5 px-6 text-white rounded-lg bg-green-400 hover:bg-green-600 shadow-lg block md:inline-block'
                                onClick={openForm}
                            />
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
