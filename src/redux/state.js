let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hey, girls! The good day!', like_count: 3, src: 'https://superbody.pro/user_files/11/avatar/171e984f4e.jpg' },
                { id: 2, message: 'Upyyyyyyy... Puppy....Cats', like_count: 5, src: 'https://i.pinimg.com/236x/44/9e/f5/449ef5be2ec36d7dd3b6f03fb3734780.jpg'},
                { id: 3, message: 'x-ray in medcine rules', like_count: 12, src: 'https://pic.sport.ua/images/news/0/12/155/orig_511003.jpg'  }
            ],
            friends: [
                {id: 1, name: 'Yulia', src: 'https://wl-adme.cf.tsp.li/resize/728x/jpg/214/dda/5fae555a5a94a24fd073a9a423.jpg'},
                {id: 2, name: 'Alex', src: 'https://screenfiction.org/content/image/0/5/184/924b45fd-full.webp'},
                {id:3, name: 'Kira', src: 'https://vokrug.tv/pic/news/4/4/c/3/44c38d9dcf7a066c791136b5e66e4c30.jpg'}
            ],
            newPostText: 'Введите сообщение'
            
        },
        dialogsPage: {
            messages: [
                { id: 1, message: 'Hi! How are you?' },
                { id: 2, message: 'How is your job? Finished the redesign?' },
                { id: 3, message: 'Maybe we will meet in the evening?' }
            ],
            dialogs: [
                { id: 1, name: 'Hanna' },
                { id: 2, name: 'Nikolay' },
                { id: 3, name: 'Andrey' },
                { id: 4, name: 'Anastaysha' },
                { id: 5, name: 'Alex' }
            ],
            newMessageText: 'Cообщение...'
        }
    },
    getState () {
        return this._state;
    },
    _callSubscriber (){},
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like_count: 0,
            src: 'https://pumpmuscles.ru/wp-content/uploads/2019/03/kak-stat-fitonyashkoi-696x435.jpg'
        }
        this._state.profilePage.posts.push (newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber (this._state);
    },
    addDialog () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push (newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber (this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber (this._state);
    },
    updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber (this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;