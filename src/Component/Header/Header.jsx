import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  return (
    <>

    <div className='navbar'>

    
      <header>
        <Link to='/'>   <img src="./src/Component/Header/logo.png" alt=""/></Link>
   

        <nav>
           <Link to = '/tvshows'>Tv Shows</Link>
           <Link to = '/movie'>Movies</Link>
           <Link to = '/recentlyadded'>Recently Added</Link>
           <Link to = '/mylist'>My List</Link>
        </nav>
        <FaSearch/>
            
  
      </header>
      </div>
    </>
  )
}

export default Header
