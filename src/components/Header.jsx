import { Link, useLocation } from 'react-router-dom'

function Header() {
    const currentPage = useLocation().pathname

    return (
        <div className='bg-success py-2'>
        <ul className='nav nav-underline fs-3 justify-content-end mx-5'>
            <li className='nav-item'>
                <Link
                to='/'
                className={currentPage === '/' ? 'nav-link active text-white' : 'nav-link text-black'}
                >
                    About Me
                </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/portfolio'
                className={currentPage === '/portfolio' ? 'nav-link active text-white' : 'nav-link text-black'}
                >
                    Portfolio
                </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/contact'
                className={currentPage === '/contact' ? 'nav-link active text-white' : 'nav-link text-black'}
                >
                    Contact
                </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/resume'
                className={currentPage === '/resume' ? 'nav-link active text-white' : 'nav-link text-black'}
                >
                    Resume
                </Link>
            </li>

        </ul>
        </div>
    )
}

export default Header