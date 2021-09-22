import React from 'react';
import Friend from './Frend/Friend';
import s from './Friends.module.css';

const Friends = (props) => {

    let friendElement = props.friends.map((m) => <Friend img src={m.src} name={m.name} />)
    return (
        (<div>
            <div className={s.item}>
                My friends
            </div>
                {friendElement}
        </div>
        )
    );
}

export default Friends;