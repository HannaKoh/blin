import React from 'react';
import {addDialogActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState();

    let addDialog = () => {
        props.store.dispatch(addDialogActionCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextActionCreator(body));
    }

    return (
        <Dialogs updateNewMessageText={onMessageChange} addDialog={addDialog} dialogsPage={state.dialogsPage}
                 newMessageText={state.dialogsPage.newMessageText}/>
    )
}

export default DialogsContainer;