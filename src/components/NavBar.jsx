import Search from './Search';
import Logo from './Logo';
import NumResults from './NumResults';

const NavBar = () => {
    return (
        <nav className='nav-bar'>
            <Logo />
            <Search />
            <NumResults />
        </nav>
    );
};

export default NavBar;
