import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css'

const Header= ({screenName})=>
{
 
  return(
    <>
    <header className={Styles.background}>
    <h1>{screenName}</h1>
    <div className="navbar">
    
      <Link to="/">Home</Link>
      <Link to="/watchlist">Watchlist</Link>
    </div>
  </header>
    </>
  )
}
export default Header;

