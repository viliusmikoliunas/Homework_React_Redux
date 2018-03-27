import initialToDoItems from '../data/initialToDoItems'

const initialState = {
    itemListTD: initialToDoItems
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NEW_ITEM':
            const newListItem = {
                id: 'tdi-' + Math.random().toString(36).substring(2, 15),
                title: action.text
            }
            return{
                ...state,
                itemListTD: [
                    ...state.itemListTD,
                    newListItem
                ]
            }
        case 'DELETE_ITEM':
            return {
                ...state,
                itemListTD: state.itemListTD.filter(item => item.id !== action.itemId)
            }
        default:
            return state;
    }
};
