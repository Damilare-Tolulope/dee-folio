import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import './App.css'
import RouteComponent from 'routes/Route'

const App: React.FC = () => {

  return (
    <>
      <BrowserView>
        <RouteComponent />
      </BrowserView>
      <MobileView style={{ textAlign: 'center', fontSize: "14px", display: 'flex', justifyContent: 'center', margin:'auto', height:'400px'}}>
        <p style={{width: '70%'}}>Can't see anything? You're probably using a mobile phone</p>
      </MobileView>
    </>
  )
}

export default App