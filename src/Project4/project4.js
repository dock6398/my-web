import React from 'react';
import { useState, useEffect } from "react";
// 리셋
import "../assets/css/minireset.css"
// font
import "../assets/css/font.css"
// my css
import style from "./Style.module.css"

import logo from "./images/connect.png";
import Swiper from './swiper/Swiper';
import About from './about/About'
import Header from "./toggle/Header"
import Footer from './toggle/Footer'


const project4 = () => {

    function App() {
        const [ScrollY, setScrollY] = useState(0); // window 의 pageYOffset값을 저장
        const [ScrollActive, setScrollActive] = useState(false);
        function handleScroll() {
          if (ScrollY > 299) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
          } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
          }
        }
        useEffect(() => {
          function scrollListener() {
            window.addEventListener("scroll", handleScroll);
          } //  window 에서 스크롤을 감시 시작
          scrollListener(); // window 에서 스크롤을 감시
          return () => {
            window.removeEventListener("scroll", handleScroll);
          }; //  window 에서 스크롤을 감시를 종료
        });
    }

    return (
        <div className={style.container}>
            <header>
                <nav>
                    <div>
                        <a href="#" className={style.tag}>
                            <img src={logo} className={style.logo}/>
                        </a>
                    </div>
                    <Header />
                </nav>
            </header>
            <main>
                <div className={style.content}>
                    <div className={style.bg}>
                        <div className={style.box}>
                            <div className={style.main_title}></div>
                        </div>
                    </div>
                    
                    {/* about 영역 */}
                    <About />

                    {/* vision 영역 */}
                    <div className={style.vision}>
                        <div className={style.box}>
                            <div className={style.title}>누구에게나<br/>배움의 기회가 열리는 세상</div>
                            <p className={style.txt}>소프트웨어가 산업의 중심이 되는 미래에는 생애<br/>전반에 걸쳐 지속적인 배움이 필요합니다.<br/>누구나 경제적 부담없이 필요한 최신 기술을 원하는<br/>시기에 배울 수 있도록,<br/>교육으로 다가올 미래를 준비합니다.</p>
                        </div>
                    </div>

                    {/* story 영역 */}
                    <div className={style.story}>
                        <div className={style.box}>
                            <div className={style.title}>교육으로 함께 만드는 변화</div>
                            <p className={style.txt}>소프트웨어, 기술 교육 분야의 혁신적인 교육 모델을<br/>연구하고 시도하며 뜻을 같이하는 수많은 파트너들과<br/>협력하고 있습니다.<br/>우리는 함께, 교육으로 세상을 변화 시킵니다.</p>
                            <div className={style.content_box}>
                                <div className={style.text_box}>
                                    <div className={style.box_title}>연혁정보</div>
                                    <p className={style.txt}>네이버 커넥트제단의 시작부터 현재까지의<br/>활동을 소개합니다.</p>
                                    <button>연혁정보 바로가기</button>
                                </div>
                            </div>
                            <div className={style.content_box}>
                                <div className={style.text_box}>
                                    <div className={style.box_title}>재무정보</div>
                                    <p className={style.txt}>네이버 커넥트재단의 연도별 재무정보를<br/>확인할 수 있습니다.</p>
                                    <button>재무정보 바로가기</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* mission 영역 */}
                    <div className={style.mission}>
                        <div className={style.box}>
                            <div className={style.title}>Our Mission</div>
                            <p className={style.txt}>네이버 커넥트재단은 네이버가 설립한 비영리 기관으로<br/>초등학생부터 성인에 이르기까지<br/>소프트웨어 교육을 제공하여 소프트웨어, 기술 교육<br/>분야에서 혁신적인 교육 모델을 연구하고 시도합니다.</p>
                            <button>서비스 바로가기</button>
                        </div>
                    </div>
                    <Swiper />
                </div>
            </main>

            {/* footer 영역 */}
            <footer>
                <div className={style.box}>
                    <div className={style.selet_wrap}>
                        <Footer />
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
            <script src='./effect.js'></script>
        </div>
    );
};

export default project4;