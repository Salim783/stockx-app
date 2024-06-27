import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/authContext';
import favoris from '../../Assets/favoris.png';
import panier from '../../Assets/panier.png';
import logo from '../../Assets/logo.png';
import search from '../../Assets/search.png';

import './navbar.css';

const Navbar = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className='nav' id='ancre'>
      <Link to='acceuil'><img src={logo} className='logo' alt='logo' /></Link>
      <ul className='liste'>
        <Link to='#' className='link'><li className='li'>Homme</li></Link>
        <Link to='#' className='link'><li className='li'>Femme</li></Link>
        <Link to='#' className='link'><li className='li'>Enfant</li></Link>
        <Link to='#' className='link'><li className='li'>Accessoires</li></Link>
        <Link to='contact' className='link'><li className='li'>Contact</li></Link>
      </ul>
      <div className='divsearch'>
        <input type="search" placeholder="Recherche" className='search' />
        <button type='button' className='searchlogo'><img src={search} alt='search' /></button>
      </div>
      <div className='icon'>
        {isAuthenticated ? (
          <>
            <Link to='/profile'><p>Profile</p></Link>
            <Link to='/favorie'><img src={favoris} className='img' alt='favoris' /></Link>
            <Link to='/deconnexion'><p>log out</p></Link>
          </>
        ) : (
          <>
            <Link to='/login'><p>Log</p></Link>
            <Link to='/connexion'><p>Log In</p></Link>
          </>
        )}
        <Link to='#'><img src={panier} className='img' alt='panier' /></Link>
      </div>
    </div>
  );
};

export default Navbar;
