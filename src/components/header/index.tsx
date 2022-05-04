import './header.scss'
import Logo from './imgs/logo.jpg'
import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="nav-bar">
            <img src={Logo} alt="" />
            <nav className='menu'>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/produtos'>Produtos</Link>
                    </li>
                    <li>
                        <Link to='/contato'>Contato</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}
