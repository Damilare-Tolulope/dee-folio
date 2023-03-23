import React from 'react'
import Sidebar from 'components/SideNav/Sidebar'
import Header from './Header';


interface ILayout {
    children: React.ReactNode;
    title?: string;
  }

  
const Layout = ({ children, title = "" }: ILayout) => {
  return (
    <div className='App'>
        <div className='sn'>
            <Sidebar />
        </div>
        <div className='mn'>
            <Header title={title} />
            {children}
        </div>
    </div>
  )
}

export default Layout