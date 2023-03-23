import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faClockRotateLeft, faHome, faArrowRightFromBracket, faSliders, faChartColumn, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import "./style.css"
import { Path } from 'constants/path'

import logo from 'assets/logo.png'

const Sidebar: React.FC = () => {

  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <NavLink to={Path.Home}><i><FontAwesomeIcon icon={faHome} /></i> Home </NavLink>
        <NavLink to={Path.Order}><i><FontAwesomeIcon icon={faClockRotateLeft} /></i>  Order History </NavLink>
        <NavLink to={Path.Messages}><i><FontAwesomeIcon icon={faEnvelope} /></i> Messages </NavLink>
        <NavLink to={Path.Statistics}><i><FontAwesomeIcon icon={faChartColumn} /></i> Statistics </NavLink>
        <NavLink to={Path.Products}><i><FontAwesomeIcon icon={faTableCells} /></i> Products </NavLink>
        <NavLink to={Path.Settings}><i><FontAwesomeIcon icon={faSliders} /></i> Settings </NavLink>
      </div>
      <div className='logout'>
        <button><i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i> Logout </button>
      </div>
    </div>
  )
}

export default Sidebar