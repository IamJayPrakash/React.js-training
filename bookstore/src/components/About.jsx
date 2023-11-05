
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
// import Navbar from './Navbar';
// import Navbar from './Navbar';

function About() {
    return (
        <>
            {/* <Navbar />  */}
            <br />
            <div className='container card p-4 '>

               
                <div>
                    <h2 style={{ fontFamily: 'lobster' }} className='text-center'>About Us</h2>
                    <hr></hr>
                    <p>
                        Welcome to Read Rave, where our passion for literature meets the digital age. We're more than just an online book store; we're your gateway to a world of stories, imagination, and endless possibilities.
                    </p>
                </div>

                <div>
                    <h2 style={{ fontFamily: 'lobster' }}>Our Mission</h2>
                    <p>
                        At Read Rave, we believe that reading isn't just a pastime; it's a journey, an adventure, and a means to escape into other worlds. Our mission is to provide you with an immersive and exceptional reading experience that's accessible anytime, anywhere. We want to make the joy of reading easily accessible and convenient in the digital era.
                    </p>
                </div>

                <div>
                    <h2 style={{ fontFamily: 'lobster' }}>Why Choose Read Rave?</h2>
                    <ul>
                        <li><strong>Vast Library:</strong> We offer a vast collection of e-books, spanning various genres, from classic literature to the latest bestsellers. You're bound to find something that captivates your imagination.</li>
                        <li><strong>User-Friendly Platform:</strong> Our user-friendly platform is designed to enhance your reading experience. Navigate with ease, bookmark your favorite titles, and discover new authors effortlessly.</li>
                        <li><strong>Community:</strong> Join a thriving community of book enthusiasts. Share your thoughts, explore recommendations, and connect with fellow readers who share your love for books.</li>
                        <li><strong>Constant Innovation:</strong> We're committed to staying at the forefront of digital reading technology. Expect regular updates, improved features, and an evolving reading experience.</li>
                    </ul>
                </div>

                <div>
                    <h2 style={{ fontFamily: 'lobster' }}>Your Literary Sanctuary</h2>
                    <p>
                        Read Rave is more than just a website; it's a literary sanctuary, a place where readers, writers, and storytellers come together to celebrate the written word. We're passionate about what we do, and we're excited to have you join us on this literary journey.
                    </p>
                </div>

                <p>Thank you for choosing Read Rave. We look forward to being your trusted companion in your reading adventures.</p>
                <Link to="/home" style={{ textDecoration: 'none' }} className="float-shadow text-center"> 🏠 Home</Link>
        
            
            </div>
            <Footer />
        </>
    );
}

export default About;