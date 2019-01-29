const initialState: any = {
    time: 0,
    isOn: false,
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case 'START_TIMER':
            return {
                ...state,
                isOn: true,
                offset: action.payload.offset
            }
        case 'STOP_TIMER':
            return {
                ...state,
                isOn: false
            }
        case 'TICK':
            return {
                ...state,
                time: state.time + (action.payload.time - state.offset),
                offset: action.payload.time
            }
        default:
            return state
    }
}