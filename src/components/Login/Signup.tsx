import './styles.css'
import signup from '../assets/signup.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Signup = () => {
  return (
    <div className='login'>
        <div className='login_form signup_form'>
            <h3>Sign Up</h3>
            <form>
                <div className='form_input'>
                    <i><FontAwesomeIcon icon={faUserCircle} /></i>
                    <input type="text" placeholder='Username' />
                </div>
                <div className='form_input'>
                    <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    <input type="email" placeholder='Email' />
                </div>
                <div className='form_input'>
                    <i><FontAwesomeIcon icon={faLock} /></i>
                    <input type="password" placeholder='Password' />
                </div>
                <div className='form_input'>
                    <i><FontAwesomeIcon icon={faLock} /></i>
                    <input type="password" placeholder='Confirm password' />
                </div>
                    <input type="submit" value="Sign Up" />
                <div className='link_to_signup'>
                    <p>Already have an account? <span>Login</span></p>
                </div>
            </form>
        </div>
        <img src={signup} alt="signup" />
    </div>
  )
}

export default Signup