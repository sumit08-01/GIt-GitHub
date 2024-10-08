
const initialState = {
    list: []
}

const todoReducers = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            };
        case "DELETE_TODO": return "toadded";
        case "REMOVE_TODO": return "toadded";
        default: return state;
    }
}
export default todoReducers