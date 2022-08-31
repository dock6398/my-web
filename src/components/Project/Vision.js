import React from 'react';
import style from './Style.module.css'

const Vision = () => {
    return (
        <div className={style.vision}>
        <div className={style.box}>
            <div className={style.title}>누구에게나<br/>배움의 기회가 열리는 세상</div>
            <p className={style.txt}>소프트웨어가 산업의 중심이 되는 미래에는 생애<br/>전반에 걸쳐 지속적인 배움이 필요합니다.<br/>누구나 경제적 부담없이 필요한 최신 기술을 원하는<br/>시기에 배울 수 있도록,<br/>교육으로 다가올 미래를 준비합니다.</p>
        </div>
    </div>
    );
};

export default Vision;