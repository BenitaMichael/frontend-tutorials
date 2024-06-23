export const INITIAL_STATE= {
    firstName : '',
    lastName : '',
    selectedStatus: '',
    exp: 0
}


export const formReducer = (state, action) =>{
    switch(action.type){
        case 'CHANGE_INPUT':
            return{
                ...state,
                [action.payload.name]: action.payload.value
            }
        case 'INCREASE':
            return{
                ...state,
                exp: state.exp + 1
            }
        case 'DECREASE':
            return{
                ...state,
                exp: state.exp - 1
            }
        default:
            return state;
    }
}