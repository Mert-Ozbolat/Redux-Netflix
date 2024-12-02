import ActionTypes from "./actionTypes";


const initialState = {
    list: [],
    isLoading: False,
    error: null
}


const listReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.LIST_LOADING:
            return { ...state, isLoading: true };

        case ActionTypes.LIST_ERROR:
            return { ...state, isLoading: false, error: payload };

        case ActionTypes.LIST_SUCCESS:
            return { ...state, isLoading: false, error: null, list: payload };

        case ActionTypes.ADD_TO_LIST:
            const updated = state.list.concat(payload);
            return { ...state, list: updated };

        case ActionTypes.REMOVE_FROM_LIST:
            const filtered = state.list.filtered((i) => i.id !== payload.id)
            return { ...state, list: filtered }

        default:
            return state;
    }
}

export default listReducer;