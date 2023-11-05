import React from 'react'
import { useAuth } from './auth'
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
function Profile() {
    const auth = useAuth()
    const navigate = useNavigate()
    const handleLogout = () => {
        auth.logout()
        navigate('/login')
    }
    return (
        <div className='' >
            <Navbar />
            <div className='card bg-secondary text -center container text-light p-4 mt-5 mx-auto'>
                <h1 className='text-center bg-dark p-3' style={{ fontFamily: 'lobster', borderRadius: '20px' }}>
                    <i className='fa fa-user' ></i>Profile</h1>
                <hr></hr>
                <h2 style={{ fontFamily: 'cursive' }}>hello ,{auth.user}</h2><br />
                <button onClick={handleLogout} className='btn btn-info float-shadow mx-auto btn-lg'> Log out</button>
            </div>
        </div>
    )
}

export default Profile