import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link to={"/"}>
            <h1>RULOPLAST ENVASES</h1>
            </Link>

            <nav>
                <ul>
                    <li> <NavLink to={"/Potes"}>Potes</NavLink></li>
                    <li><NavLink to={"/Botellas"}>Botellas</NavLink></li>
                    <li><NavLink to={"/PourOn"}>Pour On</NavLink></li>
                </ul>
            </nav>

            <CartWidget/>
        </header>
    )
}

export default NavBar