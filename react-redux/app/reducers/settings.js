
const initialState = {
    backgroundColor: '#ffff66'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {
                ...state,
                backgroundColor: action.colorHexCode
            };
        default:
            return state;
    }
};
