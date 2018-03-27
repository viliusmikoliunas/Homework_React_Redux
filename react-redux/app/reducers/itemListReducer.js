import initialToDoItems from '../data/initialToDoItems'

const initialState = {
    itemListTD: initialToDoItems
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            const newObj = {
                id: 'tdi-' + Math.random().toString(36).substring(2, 15),
                title: action.text
            }
            return{
                ...state,
                itemListTD: [
                    ...state.itemListTD,
                    newObj
                ]
            }
        case 'DELETE_ITEM':
        default:
            return state;
    }
};
