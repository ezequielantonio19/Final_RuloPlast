import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
    return (
        <header>
            <h1>RULOPLAST ENVASES</h1>

            <nav>
                <ul>
                    <li>Potes</li>
                    <li>Botellas</li>
                    <li>Pour On</li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar