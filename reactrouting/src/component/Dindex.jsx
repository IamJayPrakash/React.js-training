import React from 'react'
import { Link } from "react-router-dom";

export default function Dindex() {
    return (
        <div className=' mx-auto d-flex  p-4' style={{}}>

            <ul className="">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>

            </ul></div>
    );
}
