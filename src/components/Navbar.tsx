import React, { useState } from 'react'

interface IndexProps {
    tabIndex: number;
    changeIndex: (index: number) => void;
}
const Navbar: React.FC<IndexProps> = ({ tabIndex, changeIndex}) => {

    // const [tabIndex, setTabIndex] = useState(0)
    const [tabs] = useState(["Home", "About", "Projects", "Contact"])

  return (
    <nav>
        <div className='logo'>Logo</div>
        <div className='nav-links'>
            <ul>
                {tabs.map((tab, index) => {
                    return(
                        <li key={index} 
                            onClick={()=> changeIndex(index)} 
                            className={`${index === tabIndex ? "active" : ""}`} > {tab} </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar