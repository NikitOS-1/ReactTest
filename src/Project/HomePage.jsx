import React from 'react';
import AddPost from './AddPost/AddPost';

let HomePage = (props) => {
    let text = React.createRef();
    let addMessage = () => {
        props.SendMessage();
    }
    let changeText = () => {
        props.updateMessage(text.current.value)
    }
    let postElement = props.messages.messages.map(
        m => <AddPost messages={m.text} />
    );
    return (
        <div className="HomePage">
            <textarea onChange={changeText} ref={text} value={props.messages.textUpdate}/>
            <button onClick={addMessage}>Send</button>
            {postElement}
        </div>
    );
};
export default HomePage;
// work version 1.0 
//this form is adding posts to page, and create array from posts