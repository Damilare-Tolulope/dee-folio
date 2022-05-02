import { FormEvent, useState } from 'react'
import './styles.css'
import login from '../assets/login.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faEyeSlash, faEye } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleFormData = (e:FormEvent) => {
        e.preventDefault();

        // Prevent submitting empty form
        if(!username || !password) return alert("Please input your credentials")

        // Validate password
        if(password.length < 5){
            setError("Invalid Password");
            setTimeout(() => {
                setError("")
            }, 5000);
        }
        
        console.log(username, password, rememberMe)
        
        setUsername("")
        setPassword("")
        setRememberMe(false)
        setShowPassword(false)
    }


    const switchToSignup = () => {
        const login = document.getElementById('login');
        if(login != undefined){
            login.style.flexDirection = "row-reverse"            
        }
        console.log(login);
    }

  return (
    <div id="login" className='login'>
        <img src={login} alt="login" />
        <div className='login_form'>
            <h3>Login</h3>
            <form onSubmit={handleFormData}>
                <div className='form_input'>
                    <i><FontAwesomeIcon icon={faUserCircle} /></i>
                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Username' />
                </div>
                <div className='form_input'>
                    <i><FontAwesomeIcon icon={faLock} /></i>
                    <input id='password' value={password} onChange={(e) => setPassword(e.target.value)} type={ showPassword ? "text" : "password"} placeholder='Password' />
                    <i className='togglePassword' onClick={() => setShowPassword(!showPassword)}> { showPassword ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} /> }</i>
                </div>
                <p id="error" style={{ lineHeight: '20px', color: 'red', textAlign: 'left', fontSize: "12px", marginTop: '5px'}}>{ error} </p>
                <div className='remember'>
                    <input checked={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} type="checkbox"/> Remember me
                </div>
                    <input type="submit" value="Login" />
                    <p>Forgot Password?</p>
                <div className='link_to_signup'>
                    <p>Don't have an account? <span onClick={switchToSignup}>Sign Up</span></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login