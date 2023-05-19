import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="blue darken-1">
            <div className="nav-wraper">
                <Link to="/" className="brand-logo">React Router</Link>
                <ul id="nav-mobile"className="right ">
                    <li><Link to="/dnd">DragAndDrop</Link></li>
                    <li><Link to="/dndTrello">DnDTrello</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><a href="https://github.com/AlexanderSipko">My github</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header