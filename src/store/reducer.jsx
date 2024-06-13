const initialState = {
    count: 0
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + action.payload
            }
        case 'DECREMENT':
            return {
                ...state,
                count: Math.max(state.count - action.payload, 0)
            }
            case 'RESET':
                return {
                    ...state,
                    count: 0
            }
        default:
            return state
    }

}