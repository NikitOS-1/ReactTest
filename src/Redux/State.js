import { rerenderPage } from '../render';
let store = {
    _state: {
        messages: [],
        textUpdate: ''
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        if (action.type === 'SEND-MESSAGE') {
            let text = { text: this._state.textUpdate }
            this._state.messages.unshift(text);
            this._state.textUpdate = '';
            rerenderPage();
        } else if (action.type === 'UPDATE-MESSAGE') {
            this._state.textUpdate = action.text;
            rerenderPage();
        }
    }
}

export default store;