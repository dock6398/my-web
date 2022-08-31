import React from 'react';
import style from './Style2.module.css'

import Main from './section/Main'
import Procedure from './section/Procedure'
import Info from './section/Info'
import Text_wrapper from './section/Text_wrapper';

const Section = () => {
    return (
        <div className={style.section}>
            <div className={style.box}>
                <Main />
                <Procedure />
                <Info />
                <Text_wrapper />
            </div>
        </div>
    );
};

export default Section