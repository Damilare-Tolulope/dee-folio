import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faClockRotateLeft, faHome, faArrowRightFromBracket, faSliders, faChartColumn, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "./style.css"
import logo from '../assets/logo.png'

const Sidebar: React.FC = () => {

  const scrollToView = (section: string) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  return (
    <div className='sidebar'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <button onClick={() => scrollToView('home')}><i><FontAwesomeIcon icon={faHome} /></i> Home </button>
        <button onClick={() => scrollToView('history')}><i><FontAwesomeIcon icon={faClockRotateLeft} /></i>  Order History </button>
        <button onClick={() => scrollToView('messages')}><i><FontAwesomeIcon icon={faEnvelope} /></i> Messages </button>
        <button onClick={() => scrollToView('statistics')}><i><FontAwesomeIcon icon={faChartColumn} /></i> Statistics </button>
        <button onClick={() => scrollToView('products')}><i><FontAwesomeIcon icon={faTableCells} /></i> Products </button>
        <button onClick={() => scrollToView('settings')}><i><FontAwesomeIcon icon={faSliders} /></i> Settings </button>
      </div>
      <div className='logout'>
        <button><i><FontAwesomeIcon icon={faArrowRightFromBracket} /></i> Logout </button>
      </div>
    </div>
  )
}

export default Sidebar