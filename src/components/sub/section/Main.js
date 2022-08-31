import React from 'react';
import style from '../Style2.module.css'

const Main = () => {
    return (
        <div className={style.main}>
            <span className={style.data}>2022<em>상반기</em></span>
            <div className={style.main_title}>네이버 커넥트재단 연구 과제 공모</div>
            <span className={style.badge}>접수중</span>
            <span className={style.txt}>네이버 커넥트재단은 다년간 온·오프라인 교육 사업을 운영하면서 쌓은 데이터를 연구자들에게 공개하고 학술 연구를 지원하고자 합니다.<br/>공모에 선정된 연구자에게는 연구용 데이터와 소정의 연구비를 지원합니다.<br/>네이버 커넥트재단의 교육 사업에 관심있는 많은 연구자분들의 관심과 참여 바랍니다.</span>
        </div>
    );
};

export default Main;