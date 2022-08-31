import React from 'react';
import style from '../Style2.module.css'

const Info = () => {
    return (
        <div className={style.info}>
            <h2 className={style.info_title}>공모 안내</h2>
            <div className={style.info_item}>
                <div className={style.item_title}>공모 분야</div>
                <div className={style.item_txt}>네이버 커넥트재단의 교육 사업 또는 기술 교육(SW/AI 등), 기술 활용 교육(DKT 등) 관련 연구</div>
            </div>
            <ul className={style.list}>
                <li>
                    <div className={style.wrap}>
                        <div className={style.site}>
                        </div>
                        <div className={style.name}>엔트리</div>
                    </div>
                </li>
                <li>
                    <div className={style.wrap}>
                        <div className={style.site}>
                        </div>
                        <div className={style.name}>부스트코스</div>
                    </div>
                </li>
                <li>
                    <div className={style.wrap}>
                        <div className={style.site}>
                        </div>
                        <div className={style.name}>에드위드</div>
                    </div>
                </li>
                <li>
                    <div className={style.wrap}>
                        <div className={style.site}>
                        </div>
                        <div className={style.name}>소프트웨어야 놀자</div>
                    </div>
                </li>
                <li>
                    <div className={style.wrap}>
                        <div className={style.site}>
                        </div>
                        <div className={style.name}>부스트캠프 Ai Tech,<br />부스트캠프 웹·모바일</div>
                    </div>
                </li>
                <li>
                    <div className={style.wrap}>
                        <div className={style.site}>
                        </div>
                        <div className={style.name}>쥬니버</div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default Info;