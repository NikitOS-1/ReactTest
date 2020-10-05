import React from 'react';
import AddPost from './AddPost/AddPost';

let HomePage = (props) => {
    let text = React.createRef();

    let addMessage = () => {
        props.dispatch({ type: 'SEND-MESSAGE' });
    }
    let changeText = () => {
        props.dispatch({ type: 'UPDATE-MESSAGE', text: text.current.value });
    }
    let postElement = props.state.messages.map(
        m => <AddPost messages={m.text} />
    );
    return (
        <div className="HomePage">
            <textarea onChange={changeText} ref={text} value={props.state.textUpdate} />
            <button onClick={addMessage}>Send</button>
            {postElement}
        </div>
    );
};
export default HomePage;
//  work version 2.0
//  this form is adding posts to page, and create array from posts
//  данные вносятся сразу в State через props и возвращаются в UI 
//  work version 3.0
//  add dispatch// wrapper state