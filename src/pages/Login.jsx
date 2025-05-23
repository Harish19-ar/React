import Input from 'costuminputg'
import { useState } from 'react'
import{Link} from 'react-router-dom'


const Login = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    
 
    const handlesubmit = (e) => {
        e.preventDefault()
        console.log(email)
        console.log(password)
    }
    return (
        <center>
            <div className="items-center justify-center w-200 h-full mt-50 bg-gr-100">
                <form onSubmit={handlesubmit}>
                    <Input
                        type='email'
                        label='Email address'
                        placeholder='Enter your email'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={email}
                        
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        type='password'
                        label='password'
                        placeholder='Enter your password'
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='bg-yellow-600 w-full mt-4' type='submit'>Login</button>
                    <p><Link to ="/register">New Register</Link></p>
                </form>
            </div>
        </center>
    )
}


export default Login