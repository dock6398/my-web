import React,{useState} from 'react';
import { Link } from "react-router-dom";

import style from '../Project/Style.module.css'
import logo from "../Project/images/connect.png"


const Header = () => {

const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정

const toggleMenu = () => {
      setMenu(isOpen => !isOpen); // on,off 개념 boolean
  }
const [isbutton, setbutton] = useState(false);

const togglebutton = () => {
      setbutton(isbutton => !isbutton);
}

  return(
    <header>
      <nav>
        <div>
          <a href="#" className={style.tag}>
            <img src={logo} className={style.logo}/>
          </a>
        </div>
        <div className={isbutton ? (style.chancel) : (style.button)} onClick={() => {
          toggleMenu()
          togglebutton()
        }}>
    <ul className={isOpen ? (style.show) : (style.hide)}>
        <li><Link to="/" className= {style.color}>About(Main)</Link></li>
        <li><a href="#">Service</a></li>
        <li><Link to="/sub" className= {style.color}>Research(Sub)</Link></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Apply</a></li>
       <li><a href="#">Contact</a></li>
    </ul>
    </div>
    </nav>
    </header>
  )
}

export default Header