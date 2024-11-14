import { Link, useLocation } from 'react-router-dom'

function Header() {
    const currentPage = useLocation().pathname

    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>

        </ul>
    )
}

export default Header