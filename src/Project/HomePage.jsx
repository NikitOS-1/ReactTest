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
    );//array State Messages
    return (
        <div className="HomePage">
            <textarea onChange={changeText} ref={text} />
            <button onClick={addMessage}>Send</button>
            {postElement}
        </div>
    );
};
//решить задачу с занулением value textarea  //значения value должны браться с state
export default HomePage;