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
import Buttons from './Button'

import { FcConferenceCall } from 'react-icons/fc'

export default function ResponsiveNavBar(props: any) {
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
                            <Buttons />
                        </NavItem>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    )
}
