import initialState from '../states/listData'


const ListDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload.list,
                count: action.payload.count,
                loading: false
            }
        case 'ERROR':
            return {
                ...state,
                error: action.payload.error,
                loading: false
            }
        case 'TOGGLE_LOADING':
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return {
                ...initialState
            }
    }
}
export default ListDataReducer