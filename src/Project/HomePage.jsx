import React from 'react';
import AddPost from './AddPost/AddPost';

let HomePage = (props) => {
    let text = React.createRef();
    let addMessage = () => {
        props.SendMessage();
        text.current.value = '';
    }
    let changeText = () => {
        props.updateMessage(text.current.value)
    }
    let postElement = props.messages.messages.map(
        m => <AddPost messages={m.text} />
    );
    return (
        <div className="HomePage">
            <textarea onChange={changeText} ref={text} />
            <button onClick={addMessage}>Send</button>
            {postElement}
        </div>
    );
};
export default HomePage;