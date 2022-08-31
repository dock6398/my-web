import React from 'react';

import css from "./Style.module.css"
// swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Pagination} from "swiper"
import "./swiper.css"

import bg4 from "./images/mission_bg4.jpg"
import bg1 from "./images/mission_bg1.jpg"
import bg2 from "./images/mission_bg2.jpg"
import bg3 from "./images/mission_bg3.jpg"

SwiperCore.use([Pagination])

const swiper = (swiper) => {
    return (
        <div>
            <Swiper
                className='swiper'
                spaceBetween={20}
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true}}
            >
                <SwiperSlide style= {{
                    minWidth : 285,
                    maxWidth : 285,
                    height : 455,
                    margin : "0 10px",
                    border: "1px solid #ddd",
                    borderRadius : 15,
                    position: "relative"
                }}>
                        <img src= {bg4}/>
                        <div style={{
                            padding: "0 20px",
                            paddingTop : 30,
                            opacity: 1,
                        }}>
                            <div className={css.span}>영유아 교육</div>
                            <h2>어린이들에게 안전하고 유익한 콘텐츠를 제공합니다.</h2>
                            <p>어린이들이 즐거운 놀이를 통해 배우고 성장할 수 있는 환경을 제공합니다.</p>
                            <a href="#" className={css.service}>쥬니버</a>
                        </div>
                </SwiperSlide>
                <SwiperSlide style= {{
                    minWidth : 285,
                    maxWidth : 285,
                    height : 455,
                    margin : "0 10px",
                    border: "1px solid #ddd",
                    borderRadius : 15,
                    position: "relative"
                }}>
                        <img src= {bg1}/>
                        <div style={{
                            padding: "0 20px",
                            paddingTop : 30,
                            opacity: 1,
                        }}>
                            <span>초중등 SW교육</span>
                            <h2>소프트웨어 교육으로 아이들의<br/>미래를 만들어 갑니다.</h2>
                            <p>아이들이 소프트웨어 코딩이 즐거운 놀이이자. 실생활의 문제를 해결할 수 있는 유익한 도구로 느낄 수 있도록 합니다.</p>
                            <div class="pos1">
                                <a href="#" class="service">엔트리</a>
                                <a href="#" class="service">소프트웨어야놀자</a>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide style= {{
                    minWidth : 285,
                    maxWidth : 285,
                    height : 455,
                    margin : "0 10px",
                    border: "1px solid #ddd",
                    borderRadius : 15,
                    position: "relative"
                }}>
                        <img src= {bg2}/>
                        <div style={{
                            padding: "0 20px",
                            paddingTop : 30,
                            opacity: 1,
                        }}>
                            <span>성인 SW교육</span>
                            <h2>소트프웨어 산업에 필요한 현장형 인재를 발굴하고 양성합니다.</h2>
                            <p>문제해결 능력을 기르고 프로젝트를 해보면서 예비 개발자로 성장해 나갑니다.</p>
                            <div class="pos2">
                                <a href="#" class="service">부스트캠프</a>
                                <a href="#" class="service">부스트코스</a>
                            </div>
                        </div>
                </SwiperSlide>
                <SwiperSlide style= {{
                    minWidth : 285,
                    maxWidth : 285,
                    height : 455,
                    margin : "0 10px",
                    border: "1px solid #ddd",
                    borderRadius : 15,
                    position: "relative"
                }}>
                        <img src= {bg3}/>
                        <div style={{
                            padding: "0 20px",
                            paddingTop : 30,
                            opacity: 1,
                        }}>
                            <span>열린강좌</span>
                            <h2>더 많은 사람들이 교육의 기회를 얻을 수 있도록 공개 강좌 서비스를 제공합니다.</h2>
                            <p>언제 어디서나 명강의를 무료로 듣고 지식을 공유할 수 있습니다.</p>
                            <div class="pos3">
                                <a href="#" class="service">edwith</a>
                                <a href="#" class="service">칸아카데미</a>
                            </div>
                        </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default swiper;