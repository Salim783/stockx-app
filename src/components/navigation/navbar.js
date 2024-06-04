import profile from '../../Assets/profile.png'
import favoris from '../../Assets/favoris.png'
import panier from '../../Assets/panier.png'
import logo from '../../Assets/logo.png'
import search from '../../Assets/search.png'
import {Link} from 'react-router-dom'

import React from 'react'
import'./navbar.css'
export default function navbar() {
  return (
    <> 
    <div className='nav' id='ancre'>
        <Link to='acceuil'><img src={logo} className='logo' alt=''/></Link>
            <ul className='liste'>
            <Link to='#' className='link'><li className='li'>Homme</li></Link>
            <Link to='#' className='link'><li className='li'>Femme</li></Link>
            <Link to='#' className='link'><li className='li'>Enfant</li></Link>
            <Link to='#' className='link'><li className='li'>Accessoires</li></Link>
            <Link to='contact' className='link'><li className='li'>Contact</li></Link>
            </ul>
            <div className='divsearch'>
            <input type="search" placeholder="Recherche" className='search'/>
            <button type='button' className='searchlogo'><img src={search} alt=''/></button>
            </div>
        <div className='icon'>
            <Link to='login'><img src={profile} className='img' alt=''/></Link>
            <Link to='#'><img src={favoris} className='img' alt=''/></Link>
            <Link to='#'><img src={panier} className='img' alt=''/></Link>
        </div>
    </div>

     </> 
       
  )
}
