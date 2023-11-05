import React, { useState } from 'react'
import Sidecontent from './Sidecontent'
// import { Link } from "react-router-dom";
import { useAuth } from './auth';
import { useNavigate } from 'react-router-dom';
function Login() {

    const [user, setUser] = useState('')
    const auth = useAuth()
    const navigate = useNavigate()
    // const [user, setUser] = useState(() => {
    //     const val = localStorage.getItem('user')
    //  })
    const handleLogin = () => {
        auth.login(user)
        navigate('/home',{replace: true})
    }
    return (
        <>
            <div className="fullcontent">
                <Sidecontent />
                <div className="formbox ">

                    <h3>Log In</h3>
                    <form id="form" action="" method="post" className='form'>
                        <label>Username</label>
                        <input type="text" name="username" className="asd form-control" placeholder='Username' onChange={e => setUser(e.target.value)} />
                        <label>Password</label>
                        <input type="password" id="" name="password" className="asd form-control" placeholder='Password' />
                        {/* <Link to="/home" className='' style={{ textDecoration: "none" }}> */}
                            <input id="btn" type="submit" name="submit" value="Log In" className="mainbox float-shadow form-control " onClick={handleLogin} />
                        {/* </Link> */}


                        {/* <label>New user?</label> */}
                        {/* <a href="register.html" className="mainbox form-control float-shadow">Register Now</a> */}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login 