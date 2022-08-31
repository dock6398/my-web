import React from 'react';
import style from "./Style.module.css"

const about = () => {
    return (
        <div className={style.about}>
            <div className={style.box}>
                <h2 className={style.title}>About NAVER Connect Foundation</h2>
                <p className={style.txt}><strong>네이버 커넥트 재단은<br/>네이버의 공익목적 교육사업을<br/>투명하고 전문적으로<br/>시행하기 위해<br/>네이버가 2011년 설립한<br/>비영리 기관입니다.</strong></p>
            </div>
        </div>
    );
};

export default about;