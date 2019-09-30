const initialState = {
    items:[]
}

export default function itemsReducer(state = initialState, action) {
    switch(action.type) {
        case 'INSERT_ITEM':
            return {
                items: [...state.items, action.payload.item]
            };
        case 'REMOVE_ITEM':
            return {
                items: state.items.filter((item, index) => index !== action.payload.item_index)
            }
        case 'UPDATE_ITEM':
            return {
                items: updateItems(state.items, action.payload)
            }
        default:
            return state;
    }
}

function updateItems(items, data) {
    items[data.item_index] = data.item_value;
    return items;
}