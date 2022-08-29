import React,{useState} from 'react';
import style from "./Header.module.css"
  
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
    <div className={isbutton ? (style.chancel) : (style.button)} onClick={() => {
      toggleMenu()
      togglebutton()
    }}>
    <ul className={isOpen ? (style.show) : (style.hide)}>
        <li><a href="#" className= {style.color}>About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Research</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Apply</a></li>
       <li><a href="#">Contact</a></li>
    </ul>
    </div>   
  )




}

export default Header