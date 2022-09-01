import React from 'react';
import { useState, useEffect } from "react";
// 리셋
import "../assets/css/minireset.css"
// font
import "../assets/css/font.css"
// my css
import style from "../Project/Style.module.css"

import Swiper from '../Project/Swiper';
import About from '../Project/About'
import Vision from '../Project/Vision';


const Main = () => {

    return (
        <div className={style.container}>
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
                    <Vision />

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
        </div>
    );
};

export default Main;