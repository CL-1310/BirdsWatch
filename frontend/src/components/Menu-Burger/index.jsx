import { slide as Menu } from 'react-burger-menu'
import { Link } from 'react-router-dom'
import logo from "../Header/logo.jpg"


function MenuBurger() {

    return (
        <>
            <div className='menuburger_container'>
                <img src={logo} alt='Groupomania'/>
                <Menu right>
                    <div className='menuburger_links'>

                        <Link className="menu-item" to="/watches"> Montres </Link>
                        <Link className="menu-item" to="/glasses"> Lunettes </Link>
                        <Link className="menu-item" to="/bracelets"> Bracelets </Link>
                        <Link className="menu-item" to="/bowties"> Noeuds papillons </Link>
                        <Link className="menu-item" to="/rings"> Bagues </Link>
                        <Link className="menu-item" to="/phonecases"> Coques </Link>
                        <Link className="menu-item" to="/bags"> Sacs </Link>

                    </div>
                </Menu>
            </div>
        </>
    )   
}


export default MenuBurger;