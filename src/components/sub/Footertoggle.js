import React,{useState} from 'react';
import style from "./Style2.module.css"

const Footertoggle = () => {

    const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
    
    const footerMenu = () => {
          setMenu(isOpen => !isOpen); // on,off 개념 boolean
      }
    const [isbutton, setbutton] = useState(false);
    
    const footerbutton = () => {
          setbutton(isbutton => !isbutton);
    }
    
      return(
        <div className={style.selet_wrap}>
        <button className={isbutton ? (style.trun) : (style.select)} onClick={() => {
            footerMenu()
            footerbutton()
        }}>관련사이트
        </button>
    <ul className={isOpen ? (style.on) : (style.down)}>
        <li><a href="#" className={style.sites}>쥬니버</a></li>
        <li><a href="#" className={style.sites}>엔트리</a></li>
        <li><a href="#" className={style.sites}>소프트웨어야 놀자</a></li>
        <li><a href="#" className={style.sites}>부스트캠프</a></li>
        <li><a href="#" className={style.sites}>부스트코스</a></li>
        <li><a href="#" className={style.sites}>edwith</a></li>
        <li><a href="#" className={style.sites}>칸아카데미</a></li>
    </ul>
    </div> 
      )
    
    
    
    
    }
    
    export default Footertoggle