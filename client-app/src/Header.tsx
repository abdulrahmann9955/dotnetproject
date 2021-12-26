import React from 'react'

const Header = () => {
    return (
        <header className='text-gray-100 bg-gray-900 body-font shadow w-full'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row '>
                <nav>
                    <a className='mr-5  cursor-pointer border-b border-transparent'>
                        Reactivities
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default Header
