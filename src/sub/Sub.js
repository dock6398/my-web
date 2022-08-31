import React from 'react';
import { useState, useEffect } from "react";
// 리셋
import "../assets/css/minireset.css"
// font
import "../assets/css/font.css"

import logo from "../Project/images/connect.png"

import style from './Style2.module.css'

import Header from '../components/Header'
import Section from './Section'
import Footer from '../components/Footer'

const Sub = () => {
    return (
        <div className={style.container}>
            <div className={style.subHeader}>
                <ul className={style.tablist}>
                    <li><a href="#">연구 과제 공모</a></li>
                    <li><a href="#">연구 데이터 공개</a></li>
                    <li><a href="#">연구 성과</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
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
        </div>
    );
};

export default Sub;