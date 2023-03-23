import React from 'react'

import search from 'assets/search.svg'
import profile from 'assets/profile.svg'
import arrowdown from 'assets/arrowdown.svg'
import addcontact from 'assets/addcontact.svg'
import dot from 'assets/dot.svg'
import send from 'assets/send.svg'
import mic from 'assets/mic.svg'
import plus from 'assets/plus.svg'
import emoji from 'assets/emoji.svg'


const index = () => {
  return (
    <div className='container'>

      <div style={{display: 'flex'}}>
      <div className='profile_sub messages'>
        <div className='search_bar'><img src={search} alt="search" /><input type="text" placeholder="Search" /></div>
        <hr/>

        <div className='messages_contact'>
          <div className='cont'>
            <p><img src={addcontact} alt="add-contact" /> Admin's Contact</p>
            <img src={arrowdown} alt="arrow-down" />
          </div>
          <div className='message active_msg'>
            <img src={profile} alt="profile-i" />
            <div>
              <h5>Mr Michael</h5>
              <p>I have been able to create refer.....</p>
            </div>
            <small>Now</small>
          </div>
          <div className='message'>
            <img src={profile} alt="profile-i" />
            <div>
              <h5>Emmanuel P</h5>
              <p>Hey man how is your earning.......</p>
            </div>
            <small>17mins ago</small>
          </div>
          <div className='message'>
            <img src={profile} alt="profile-i" />
            <div>
              <h5>Emmanuel P</h5>
              <p>Hey man how is your earning.......</p>
            </div>
            <small>17mins ago</small>
          </div>
          <div className='message'>
            <img src={profile} alt="profile-i" />
            <div>
              <h5>Emmanuel P</h5>
              <p>Hey man how is your earning.......</p>
            </div>
            <small>17mins ago</small>
          </div>
          <div className='message'>
            <img src={profile} alt="profile-i" />
            <div>
              <h5>Emmanuel P</h5>
              <p>Hey man how is your earning.......</p>
            </div>
            <small>17mins ago</small>
          </div>
          <div className='message'>
            <img src={profile} alt="profile-i" />
            <div>
              <h5>Emmanuel P</h5>
              <p>Hey man how is your earning.......</p>
            </div>
            <small>17mins ago</small>
          </div>
        </div>
      </div>

      <div className='messages_main'>
          <div className='other_admin_details receiver'>
            <img src={profile} alt="pic" />
            <div>
              <h4>Philip Johnson</h4>
              <button>SA</button>
            </div>
            <img src={dot} alt="dot" />
          </div>
        <hr/>
        <div className='message_box'>
        <div className="imessage">
          <span>--------- Today ---------</span>
          <p className="from-me">I have been able to create referral code for about 10,000,000 partners across the globe.<span>2:37pm</span></p>
          <p className="from-them">That is really impressive.<span>2:37pm</span></p>
          <p className="from-them margin-b_one">I am promoting you again soon! Keep working. <span>2:37pm</span></p>
          {/* <p className="from-me no-tail emoji"></p> */}
          <p className="from-me">Thank you sir.<span>2:37pm</span></p>
          <div className='send_message'>
            <img src={plus} alt="plus" />
            <div>
              <img src={emoji} alt="emoji" />
              <input type="text" placeholder='Type message' />
              <img src={mic} alt="mic" />
            </div>
            <img src={send} alt="send" />
              
          </div>
        </div>
        </div>
      </div>


      </div>
    </div>
  )
}

export default index