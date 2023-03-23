import  { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'
import { faSearch, faSliders, faGears, faUserGear, faUsersGear, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'

// Components
import AppSettings from './components/AppSettings'
import ProfileSettings from './components/ProfileSettings'

const Index = () => {

    const [tabIndex, setTabIndex] = useState<number>(0)
    const [components] =useState([
      <AppSettings/>,
      <ProfileSettings/>, 
      "One",
      "Two",
      "Three",
      "Four"
    ]) 

    const changeIndex = (index: number) => {
      console.log(index);
      setTabIndex(index)
    }

    const AppSettingTab = () => {
      return(
        <>
          <i><FontAwesomeIcon icon={faSearch} /></i>
          <p>App Settings</p>
        </>
      )
    }
    const ProfileTab = () => {
      return(
        <>
          <i><FontAwesomeIcon icon={faUserGear} /></i>
          <p>Profile Settings</p>
        </>
      )
    }
    const FirstTab = () => {
      return(
      <>
        <i><FontAwesomeIcon icon={faSliders} /></i>
        <p>Settings</p>
      </>
      )}
    const SecondTab = () => {
      return(
      <>
        <i><FontAwesomeIcon icon={faGears} /></i>
        <p>Settings</p>
      </>
      )}
    const ThirdTab = () => {
      return(
      <>
        <i><FontAwesomeIcon icon={faScrewdriverWrench} /></i>
        <p>Settings</p>
      </>
      )}
    const FourthTab = () => {
      return(
      <>
        <i><FontAwesomeIcon icon={faUsersGear} /></i>
        <p>Settings</p>
      </>
      )}

    const [tabs] = useState(
    [
      <AppSettingTab/>, 
      <ProfileTab/>, 
      <FirstTab/>,
      <SecondTab/>,
      <ThirdTab/>,
      <FourthTab/>
    ])



  return (
    <div id="settings" className='settings'>
      <div className='settings_body'>
        <div className='settings_tabs'>
          {tabs.map((tab, index) => {
            return(
                <div key={index} 
                    onClick={()=> changeIndex(index)} 
                    className={`${index === tabIndex ? "s_tab active" : "s_tab"}`} > {tab} </div>
            )
          })}
        </div>
        <div className="settings_content">
            { components[tabIndex] }
        </div>
      </div>
    </div>
  )
}

export default Index