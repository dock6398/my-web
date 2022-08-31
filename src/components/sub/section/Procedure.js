import React from 'react';

import style from '../Style2.module.css'

const Procedure = () => {
    return (
        <div className={style.Procedure}>
            <div className={style.title}>공모절차</div>
            <ul className={style.Procedure_list}>
                <li className={`${style.item} ${style.item1}`}>
                    <span>01</span>
                    <span>공모참여</span>
                </li>
                <li className={`${style.item} ${style.item2}`}>
                    <span>02</span>
                    <span>공모 선정</span>
                </li>
                <li className={`${style.item} ${style.item3}`}>
                    <span>03</span>
                    <span>협약서 작성 및 연구비 지원</span>
                </li>
                <li className={`${style.item} ${style.item4}`}>
                    <span>04</span>
                    <span>연구 진행</span>
                </li>
                <li className={`${style.item} ${style.item5}`}>
                    <span>05</span>
                    <span>연구 논문 공개</span>
                </li>
            </ul>
        </div>
    );
};

export default Procedure;