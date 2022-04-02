const ADD_DIALOG = 'ADD-DIALOG';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
};

const dialogReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_DIALOG:
            let body = {
                id: 4,
                message: state.newMessageText
            }
            state.messages.push (body);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.body;
            return state;
        default:
            return state;
    }
}
export const addDialogActionCreator = () => ({type: ADD_DIALOG})
export const updateNewMessageTextActionCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, body: body})

export default dialogReducer;