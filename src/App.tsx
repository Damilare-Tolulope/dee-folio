import React from 'react'
import { BrowserView, MobileView,  } from 'react-device-detect'
import './App.css'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import Messages from './components/Messages/Messages'
import Order from './components/Order/Order'
import Products from './components/Products/Products'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'
import Sidebar from './components/SideNav/Sidebar'
import Statistics from './components/Statistics/Statistics'

const App: React.FC = () => {

  return (
    <>
      <BrowserView>
        <div className='App'>
          <div className='sn'>
            <Sidebar />
          </div>
          <div className='mn'>
            <Home />
            <Order/>
            {/* <Profile />
            <Messages />
            <Statistics />
            <Products />
            <Settings /> */}
            <Footer />
          </div>
        </div>
      </BrowserView>
      <MobileView style={{ textAlign: 'center', fontSize: "14px", display: 'flex', justifyContent: 'center', margin:'auto', height:'400px'}}>
        <p style={{width: '70%'}}>Can't see anything, You're probably using a mobile phone</p>
      </MobileView>
    </>
  )
}

export default App