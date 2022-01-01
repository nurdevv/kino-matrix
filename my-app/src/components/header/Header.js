import React from 'react';

const Header = () => {
    return (
        <header className='header'>
            <nav className='#6200ea deep-purple accent-4 header__nav '>
                <div className="nav-wrapper container">
                    <a href="#" className="brand-logo">IT-RUN</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">Movies</a></li>

                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;