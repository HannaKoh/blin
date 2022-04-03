import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( (d) => <DialogItem name = {d.name} id = {d.id} /> );
    let messagesElements = state.messages.map( (m) => <Message message = {m.message} />)
    let newMessageText = state.newMessageText;

   let newMessage = React.createRef ();

    let addDialog = () => {props.addDialog();}
    
let onMessageChange = (e) => {
    let body= e.target.value;
    props.updateNewMessageText(body);
}

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className = {s.textarea}>
                <textarea onChange={onMessageChange} ref={newMessage} value={newMessageText}/>
            <div>
                <button onClick = { addDialog }>Отправить</button>
            </div>
            </div>
            </div>
        </div>
    )
}
export default Dialogs;