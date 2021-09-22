import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>

           <img src={props.src} />
            {props.message}
            <div>
                <span>like {props.like_count}</span>
            </div>
        </div>

    );
}

export default Post;