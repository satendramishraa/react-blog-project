import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar">
            <h1>Dev Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">
                <abbr title="Create New Blog">
                <i class="fa-solid fa-pen-to-square"></i>
                </abbr>
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;