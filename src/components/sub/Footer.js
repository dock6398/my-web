import React from 'react';
import style from './Style2.module.css'

import Footertoggle from './Footertoggle'

const Footer = () => {
    return (
        <footer>
        <div className={style.box}>
            <div className={style.selet_wrap}>
                <Footertoggle />
            </div>
            <div className={style.copyright}>
                <span>ⓒ NAVER Connect Foundation</span>
                <span>개인정보처리방침</span>
                <span>기업윤리센터</span>
                <span> 공익제보 (중앙전파관리소)</span>
            </div>
            <address>
                <p><strong>(재)네이버커넥트</strong> 사업자등록번호 : &nbsp;129-82-12249</p>
                <p>주소 :<br/>경기도 성남시 분당구 황새울로 246 도담빌딩 2층</p>
                <p>대표자 : 조규찬1522-9182</p>
                <p>connect.info@connect.or.kr</p>
            </address>
        </div>
    </footer>
    );
};

export default Footer;