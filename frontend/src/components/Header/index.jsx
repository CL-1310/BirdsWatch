import { Link } from 'react-router-dom'
import logo from "../Header/logo.jpg"
 
function Header() {
    return (
        <div className='header_container'>
            <nav className='header_menu'>
                <img src={logo} alt='Birds-Watch'/>

                <div className='header_links'>
                    <Link to="/watches"> Montres </Link>
                    <Link to="/glasses"> Lunettes </Link>
                    <Link to="/bracelets"> Bracelets </Link>
                    <Link to="/bowties"> Noeuds papillons </Link>
                    <Link to="/rings"> Bagues </Link>
                    <Link to="/phonecases"> Coques </Link>
                    <Link to="/bags"> Sacs </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header