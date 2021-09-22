import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
        <div className = {s.content}>
        <img src='https://lifehacker.ru/wp-content/uploads/2018/03/cover-2_1520669590.jpg' />
    </div>
    <div className={s.descriptionBlock}>
        <h2> Ava + Description </h2>
        <div>Тренажерные залы – это просторные тренировочные пространства, 
            где каждый найдет оборудование для достижения своих целей. 
            Удобное разделение по зонам и продуманное расположение обеспечивают максимальный комфорт. 
            Все оборудование для фитнеса поставляется ведущими мировыми брендами – Life Fitness, Hammer Strength и другими.</div>
    </div>
    </div>
    )
}

export default ProfileInfo;