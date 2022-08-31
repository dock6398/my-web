import React from 'react';

import style from './Style2.module.css'
import Navtoggle from './Navtoggle'

import logo from '../Project/images/connect.png'

const Header = () => {
    return (
        <header>
            <nav>
                <div>
                    <a href="#" className={style.tag}>
                        <img src={logo} className={style.logo} />
                    </a>
                </div>
                <Navtoggle />
            </nav>
        </header>
    );
};

export default Header;