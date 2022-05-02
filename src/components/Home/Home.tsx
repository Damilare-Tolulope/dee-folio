import React from 'react'
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faCancel, faCheck } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import cacio from '../assets/Cacio.jpg'
import putt from '../assets/Puttanesca.jpg'
import pp from '../assets/pp.jpg'
import pp2 from '../assets/pp (2).jpg'
import pp3 from '../assets/pp (3).jpg'
import pp4 from '../assets/pp (4).jpg'
import pp5 from '../assets/pp (5).jpg'

const Home: React.FC = () => {
  return (
    <div id="home" className='container'>
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
      <div className='category'>
        <h1>Order History</h1>
        <div className='cat-btns'>
          <div className='cat'>
            <button><i>/</i> #345 </button>
          </div>
          <div className='cat cat-completed'>
            <button> #345 </button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="order">
          <div className='recepient'>
            <div>
              <h3>Order #321</h3>
              <p>23 Feb 2021, 08:23PM</p>
            </div>
            <div className="profile-pic">
              <img src={pp} alt="" />
            </div>
          </div>
          <div className="order-details">
            <img src={cacio} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <div className="order-details">
            <img src={putt} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <hr />
          <div className='order-footer'>
            <div>
              <p>X2 Items</p>
              <h3>$10.40</h3>
            </div>
            <div>
              <button className="reject" > <FontAwesomeIcon icon={faCancel} /> </button>
              <button className="complete" > <FontAwesomeIcon icon={faCheck} /> </button>
            </div>
          </div>
        </div>
        <div className="order">
          <div className='recepient'>
            <div>
              <h3>Order #321</h3>
              <p>23 Feb 2021, 08:23PM</p>
            </div>
            <div className="profile-pic">
              <img src={pp2} alt="" />
            </div>
          </div>
          <div className="order-details">
            <img src={cacio} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <div className="order-details">
            <img src={putt} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <hr />
          <div className='order-footer'>
            <div>
              <p>X2 Items</p>
              <h3>$10.40</h3>
            </div>
            <div className='c-r'>
              <button className='completed'><i><FontAwesomeIcon icon={faCheck} /></i> completed </button>
            </div>
          </div>
        </div>
        <div className="order">
          <div className='recepient'>
            <div>
              <h3>Order #321</h3>
              <p>23 Feb 2021, 08:23PM</p>
            </div>
            <div className="profile-pic">
              <img src={pp3} alt="" />
            </div>
          </div>
          <div className="order-details">
            <img src={cacio} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <div className="order-details">
            <img src={putt} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <hr />
          <div className='order-footer'>
            <div>
              <p>X2 Items</p>
              <h3>$10.40</h3>
            </div>
            <div className='c-r'>
              <button className='rejected'><i><FontAwesomeIcon icon={faCancel} /></i> rejected </button>
            </div>
          </div>
        </div>
        <div className="order">
          <div className='recepient'>
            <div>
              <h3>Order #321</h3>
              <p>23 Feb 2021, 08:23PM</p>
            </div>
            <div className="profile-pic">
              <img src={pp4} alt="" />
            </div>
          </div>
          <div className="order-details">
            <img src={cacio} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <div className="order-details">
            <img src={putt} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <hr />
          <div className='order-footer'>
            <div>
              <p>X2 Items</p>
              <h3>$10.40</h3>
            </div>
            <div>
              <button className="reject" > <FontAwesomeIcon icon={faCancel} /> </button>
              <button className="complete" > <FontAwesomeIcon icon={faCheck} /> </button>
            </div>
          </div>
        </div>
        <div className="order">
          <div className='recepient'>
            <div>
              <h3>Order #321</h3>
              <p>23 Feb 2021, 08:23PM</p>
            </div>
            <div className="profile-pic">
              <img src={pp5} alt="" />
            </div>
          </div>
          <div className="order-details">
            <img src={cacio} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <div className="order-details">
            <img src={putt} alt="" />
            <div>
              <h3>Vegetable Mixups</h3>
              <p>Vegetanle Fritters with egg</p>
              <div className='price'>
                <h3>$6.59</h3>
                <h3>Qty: 1</h3>
              </div>
            </div>
          </div>
          <hr />
          <div className='order-footer'>
            <div>
              <p>X2 Items</p>
              <h3>$10.40</h3>
            </div>
            <div>
              <button className="reject" > <FontAwesomeIcon icon={faCancel} /> </button>
              <button className="complete" > <FontAwesomeIcon icon={faCheck} /> </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home