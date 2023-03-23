import React from 'react'
import pp from 'assets/pp.jpg'
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = ({ title }: {title: string}) => {
  return (
    <div className='header'>
      <div className='top-nav'>
        <div className='search'>
          <i><FontAwesomeIcon icon={faSearch} /></i>
          <input type="text" placeholder="Search" />
        </div>
        <div className='n-p'>
          <i><FontAwesomeIcon icon={faBell} /></i>
          <img src={pp} alt="" />
        </div>
      </div>
        <h2 style={{backgroundColor: 'transparent', textTransform: 'uppercase', padding: '10px 5% 0'}}>{title}</h2>
    </div>
  )
}

export default Header