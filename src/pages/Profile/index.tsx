import './style.css'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as faFullStar, faCircleExclamation, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import pp from 'assets/pp.jpg'

const index = () => {
  return (
    <div className='profile'>
      <h3>Profile</h3>
      <div className='profile_details'>
        <img height={50} src={pp} alt="profile" />
        <div className='details_contact'>
          <div>
            <p>Name: </p>
            <p>Email: </p>
            <p>Phone: </p>
          </div>
          
          <div className='rating'>
            <span><FontAwesomeIcon icon={faFullStar} /></span>
            <span><FontAwesomeIcon icon={faFullStar} /></span>
            <span><FontAwesomeIcon icon={faFullStar} /></span>
            <span><FontAwesomeIcon icon={faStarHalfStroke} /></span>
            <span><FontAwesomeIcon icon={faStar} /></span>
          </div>
        </div>
      </div>
        <div className='badges'>
          <div className='badge'>
            <i><FontAwesomeIcon icon={faCircleExclamation} /></i>
            <div className='badge_content'>
              <h4>86.5%</h4>
              <p>Success Rate</p>
            </div>
          </div>
          <div className='badge'>
            <i><FontAwesomeIcon icon={faCircleExclamation} /></i>
            <div className='badge_content'>
              <h4>86.5%</h4>
              <p>Success Rate</p>
            </div>
          </div>
          <div className='badge'>
            <i><FontAwesomeIcon icon={faCircleExclamation} /></i>
            <div className='badge_content'>
              <h4>86.5%</h4>
              <p>Success Rate</p>
            </div>
          </div>
          <div className='badge'>
            <i><FontAwesomeIcon icon={faCircleExclamation} /></i>
            <div className='badge_content'>
              <h4>86.5%</h4>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      <div className='achievements'>
        <div className='total_orders'>
          <h4>Total Orders</h4>
          <p>Completed </p>
          <p>Pending </p>
          <p>Rejected </p>
        </div>
        <div className='pie'>
          <h4>Engagements</h4>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default index