
export const changeColor = (colorHexCode) => {
    return {
        type: 'CHANGE_COLOR',
        colorHexCode
    }
};

export const addNewToDoItem = (text) => {
    return {
        type: 'ADD_NEW_ITEM',
        text
    }
}