import React from 'react'
import { IoBookmarks } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>

            <Link to="/" className='mb-10 flex justify-between items-center'>
                <img src="/logo.png" alt="netflix" className='max-w-[150px]' />
            </Link>

            <Link to="/watch-list" className='flex gap-2 items-center hover:text-gray-300 transition'>
                <IoBookmarks /> İzleme Listesi
            </Link>

        </header>
    )
}

export default Header