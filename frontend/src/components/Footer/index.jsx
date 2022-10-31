import logo from "../Footer/logo.jpg"

function Footer() {
    return (
        <div className='footer_container'>
            <img src={logo} alt='Birds-Watch'/>
            <ul>
                <li> <a href="mailto:contact@birds-watch.com"> <i className='bi bi-envelope-fill'></i> Contact </a> </li>
                <li> <i className='bi bi-info-circle-fill'></i> Mentions légales </li>
            </ul>
        </div>
    )
}

export default Footer