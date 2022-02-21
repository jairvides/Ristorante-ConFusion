import * as ActionTypes from './ActionTypes';

export const Dishes = (state = {
<<<<<<< HEAD
        isLoading: true,
        errMess: null,
        dishes: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};
=======
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return{ ...state, isLoading: false, errMess: null, dishes: action.payload }

        case ActionTypes.DISHES_LOADING:
            return{ ...state, isLoading: true, errMess: null, dishes: [] }

        case ActionTypes.DISHES_FAILED:
            return{ ...state, isLoading: false, errMess: action.payload, dishes: [] }
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44

        default:
            return state;
    }
}