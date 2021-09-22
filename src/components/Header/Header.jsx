import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://fit-lime.ru/wp-content/uploads/logowh-sm.png' />
        </header>
    );
}

export default Header;