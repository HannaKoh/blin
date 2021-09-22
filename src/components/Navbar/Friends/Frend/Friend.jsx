import React from 'react';
import s from './Friend.module.css';

const Friend = (props) => {
    return (
        (<div className={s.setting}>
            <div className={s.ava}>
            <img src = {props.src} />
                </div>
            <div className={s.name}>
                {props.name}
            </div>
        </div>
        )
    );
}

export default Friend;