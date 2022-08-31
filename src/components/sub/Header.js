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
            <div className={style.subHeader}>
                <ul className={style.tablist}>
                    <li><a href="#">연구 과제 공모</a></li>
                    <li><a href="#">연구 데이터 공개</a></li>
                    <li><a href="#">연구 성과</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;