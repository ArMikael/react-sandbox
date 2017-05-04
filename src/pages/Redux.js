import { createStore } from 'redux';

function artsList (state = [], action) {
    if (action.type === 'ADD_PAINTING') {
        return [
            ...state,
            action.painting
        ];
    }

    // console.log(state, action);
    return state;
}

const store = createStore(artsList);

store.subscribe(() => {
   console.log('subscribe', store.getState());
});

store.dispatch({ type: 'ADD_PAINTING', painting: 'Casanova'});
store.dispatch({ type: 'ADD_PAINTING', painting: 'Three Warriors'});