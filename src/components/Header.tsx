import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>Welcome Page!</h1>
            <nav>
                <Link to='/'>HOME</Link>
                <Link to='/joke/'>JOKE</Link>
            </nav>
        </header>
    )
}

export default Header
