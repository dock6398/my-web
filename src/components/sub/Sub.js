import React from 'react';
import { useState, useEffect } from "react";
// 리셋
import "../../assets/css/minireset.css"
// font
import "../../assets/css/font.css"

import style from './Style2.module.css'

import Header from './Header'
import Section from './Section'
import Footer from './Footer'

const Sub = () => {
    return (
        <div className={style.container}>
            <h1>Sub페이지 입니다.</h1>
            <Header />
            <main>
                <div className={style.content}>
                    <div className={style.bg}>
                        <div className={style.box}>
                            <h2 className={style.main_title}>미래 교육 및<br/>기술 교육 분야의<br/>학술 연구를 지원합니다.</h2>
                        </div>
                    </div>

                    {/* section */}
                    <Section />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Sub;