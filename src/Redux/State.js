import {rerenderPage} from '../render';

let state = {
    messages: [],
    textUpdate:''
};

export let SendMessage = () => {
    let text = {text:state.textUpdate}
    state.messages.unshift(text);
    if(state.textUpdate == 'clear!'){
        state.messages = [];
    }
    rerenderPage();
};

export let updateMessage = (text) => {  
    state.textUpdate = text;
};

export default state;