import React from 'react';
import style from '../Style2.module.css'

const Text_wrapper = () => {
    return (
        <div className={style.Text_wrapper}>
            <div className={style.qualification}>
                <div className={style.title}>
                    <strong>지원자격</strong>
                    <div className={style.txt}>개인 또는 공동 연구<br/>(석박사 과정, 대학교수 연구기관 전문가)</div>
                </div>
            </div>
            <div className={style.support}>
                <div className={style.title}>연구지원금</div>
                <div className={style.txt}>팀별 100만원</div>
            </div>
            <div className={style.results}>
                <div className={style.title}>연구결과</div>
                <div className={style.txt}>논문(한글, 영어), 학회 논문지 제출 확인서 또는 게재 확인서<br/>우수 연구 과제는 항후 네이버 커넥트재단 홈페이지에 공개할 예정입니다.</div>
            </div>
            <div className={style.schedule}>
                <div className={style.title}>일정</div>
                <div className={style.txt}>
                    <span><strong>접수기간</strong>2022년 4월 7일(목) ~ 2022년 5월 6일(금)</span>
                    <span><strong>결과안내</strong>접수기간 종료 후 개별통지</span>
                    <span><strong>연구기간</strong>결과발표일 ~ 2022년 12월 31일</span>
                </div>
            </div>
            <div className={style.register}>
                <div className={style.title}>접수방법</div>
                <div className={style.txt}>본문 하단 연구 과제 공모 신청에서 연구계획서 제출</div>
            </div>
            <div className={style.inquiry}>
                <div className={style.title}>관련문의</div>
                <div className={style.txt}>네이버 커넥트재단 사무국 research@connect.or.kr</div>
            </div>
            <div className={style.precautions}>
                <div className={style.title}>주의사항</div>
                <div className={style.txt}>지원되는 데이터의 예시는 아래 내용을 참고하시기 바랍니다.<br />추가로 수집해야 하는 데이터(설문조사 등)를 포함한 연구도 가능 합니다.</div>
                <ul className={style.precautions_list}>
                    <li>
                        <strong>엔트리</strong>
                        <span>블록 활용, 댓글 작성 횟수, 좋아요 횟수, 프로젝트 생성일자, 프로젝트 수정일자 등</span>
                    </li>
                    <li>
                        <strong>부스트코스&amp;에드워드</strong>
                        <span>학습자 수강이력, 학습자 만족도, 퀴즈 유형, 수료증 받은 학생 수</span>
                    </li>
                    <li>
                        <strong>부스트캠프 AI Tech</strong>
                        <span>학습자 수강이력, 과제 제출여부, 학습자 정보 등</span>
                    </li>
                    <li>
                        <strong>부스트캠프 웹, 모바일</strong>
                        <span>학습자 만족도 및 자기평가 설문, 학습자 정보(출결, 학습 성취 결과 등), 학습기간 중 상호 피드백 등</span>
                    </li>
                    <li>
                        <strong>소프트웨어야 놀자</strong>
                        <span>콘텐츠 조회수, 콘텐츠 등록일자, 프로그램 지역, 오프라인 교육 설문 등</span>
                    </li>
                </ul>
                <div className={style.btn}><a href="#">연구 과제 공모 신청</a></div>
            </div>
            <div className={style.prev}><a href="#">지난 연구 과제 공모 확인 하기</a></div>
        </div>
    );
};

export default Text_wrapper;