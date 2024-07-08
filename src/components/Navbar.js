import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar px-3'>
      <NavLink to='/'>
        <div className='logo'>
          <img src='./full_logo.png' alt='Logo' />
        </div>
      </NavLink>

      <div className='nav-links'>
        <NavLink
          to='/'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          Home
        </NavLink>
        <NavLink
          to='/about'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          About Us
        </NavLink>
        <NavLink
          to='/destinations'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          Destinations
        </NavLink>
        <NavLink
          to='/packages'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          Packages
        </NavLink>
        <NavLink
          to='/community'
          className={(navData) => (navData.isActive ? 'active-link' : 'none')}
        >
          Community
        </NavLink>
        <NavLink
          to='/login'
          className={(navData) => (navData.isActive ? 'profile-button active-profile' : 'profile-button')}
        >
          My Profile
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
