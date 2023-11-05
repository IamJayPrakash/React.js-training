import React from 'react';

function Footer() {
    const date = new Date();
    const current_year = date.getFullYear();
    return (
        <footer>
            <p>copyright &copy; {current_year}</p>
        </footer>
    );
}
export default Footer;