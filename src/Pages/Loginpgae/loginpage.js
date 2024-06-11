import { useState, createContext } from 'react'
import style from './index.module.css'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export function Login(props) {

    const navigate = useNavigate()
    const defaultInfo = { email: "admin@mail.com", password: '123456' }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [input, setInput] = useState('')
    const [passError, setPassError] = useState(false)
    const [emailError, setEmailError] = useState(false)
    function controllInput() {
        if (email === '' || email.trim() === '') {
            setEmailError(true)
        }
        else {
            setEmailError(false)
        }
        if (password === '' || password.trim() === '') {
            setPassError(true)
        }
        else {
            setPassError(false)
        }
        setInput({ email, password })
        if (defaultInfo['email'] === email && defaultInfo['password'] === password) {
            // const UserContext = createContext({ email, password })
            props.useData(email, password)
            // toast.success('succes')
            navigate('/home')

        }
        else {

            toast.error('invalid detail')
            // alert('invalid detail')
        }
    }
    return (
        <div className={style.container}>
            <h1>Login</h1>
            <div>
                <p>Email</p>
                <input type='email' placeholder='enter email' onChange={(e) => setEmail(e.target.value)}></input>
                {emailError ? <span>Email should not be empty</span> : ''}
            </div>
            <div>
                <p>Password</p>
                <input type='password' placeholder='enter password' onChange={(e) => setPassword(e.target.value)}></input>
                {passError ? <span>password should not be empty</span> : ''}
            </div>
            <button onClick={controllInput}>Login</button>
            {/* {console.log(input)} */}
            <ToastContainer />
        </div>
    )
}