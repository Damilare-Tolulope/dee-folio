import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { faSearch, faSliders, faGears, faUserGear, faUsersGear, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'


const Settings = () => {
  return (
    <div id="settings" className='settings'>
      <h3>Settings</h3>
      <div className='settings_body'>
        <div className='settings_tabs'>
          <div className='s_tab'>
            <i><FontAwesomeIcon icon={faSearch} /></i>
            <p>Settings</p>
          </div>
          <div className='s_tab'>
            <i><FontAwesomeIcon icon={faGears} /></i>
            <p>Settings</p>
          </div>
          <div className='s_tab'>
            <i><FontAwesomeIcon icon={faSliders} /></i>
            <p>Settings</p>
          </div>
          <div className='s_tab .active'>
            <i><FontAwesomeIcon icon={faUserGear} /></i>
            <p>Settings</p>
          </div>
          <div className='s_tab'>
            <i><FontAwesomeIcon icon={faScrewdriverWrench} /></i>
            <p>Settings</p>
          </div>
          <div className='s_tab'>
            <i><FontAwesomeIcon icon={faUsersGear} /></i>
            <p>Settings</p>
          </div>
        </div>
        <div className="settings_content"></div>
      </div>
    </div>
  )
}

export default Settings