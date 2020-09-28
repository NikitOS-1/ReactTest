import {rerenderPage} from '../render';

let state = {
    messages: [],
    textUpdate:''
};

export let SendMessage = () => {
    let text = {text:state.textUpdate}
    state.messages.unshift(text);
    state.textUpdate = '';
    rerenderPage();
};

export let updateMessage = (text) => {  
    state.textUpdate = text;
    rerenderPage();
};

export default state;