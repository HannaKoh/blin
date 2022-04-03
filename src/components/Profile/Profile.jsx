import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPosts-conteiner";

const Profile = (props) => {
    return (
        <div>
            <div>
                <ProfileInfo />
                <MyPostsContainer store={props.store} />
            </div>
        </div>
    );
}

export default Profile;