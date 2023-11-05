import React from 'react'
// import Dindex from './Dindex';
import Header from './Header';

export default function Home() {
    return (
        <div className=''>
            <Header />
            <div className=' container card bg-info p-4 mx-auto m-4 '>
                <h1 className='text-center text-white'>Welcome to Home Page</h1>
            </div>
        </div>
    );
}
