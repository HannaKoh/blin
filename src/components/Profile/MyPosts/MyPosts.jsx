import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

    let postsElement = props.posts.map((m) => <Post img src = {m.src} message={m.message} like_count={m.like_count} />)

let newPostElement = React.createRef ();

    let addPost = () =>
    {
        props.dispatch (addPostActionCreator());
    }

let onPostChange = () =>{
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator (text);
    props.dispatch (action);

}

    return (

        <div className={`${s.content} ${s.head} ${s.postsBlock}`}>
           <h3>  My posts </h3>
            <div>
                <textarea onChange = {onPostChange} ref={newPostElement} value = {props.newPostText}/>
            </div>
            <div className={s.button}>
                <button onClick ={ addPost }>Опубликовать</button>
            </div>
            <div className={`${s.content} ${s.head}`}>
                New post
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>


    );
}

export default MyPosts;