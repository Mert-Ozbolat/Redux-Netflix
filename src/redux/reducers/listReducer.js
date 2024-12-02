

const initialState = {
    list: [],
    isLoading: False,
    error: null
}


const listReducer = (state, { type, payload }) => {
    switch (type) {
        case "x":
            return state;
        case "y":
            return state;
        case "z":
            return state;
        default:
            return state;
    }
}

export default listReducer;