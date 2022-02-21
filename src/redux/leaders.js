import * as ActionTypes from './ActionTypes';

<<<<<<< HEAD
export const Leaders = (state  = { isLoading: true,
                                    errMess: null,
                                    leaders:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
        return {...state, isLoading: false, errMess: null, leaders: action.payload};

        case ActionTypes.LEADERS_LOADING:
            return {...state, isLoading: true, errMess: null, leaders: []}

        case ActionTypes.LEADERS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
    }
=======
export const Leaders = (state = {isLoading: true, errMess: null, leaders: []}, action) => {

    switch (action.type) {

      case ActionTypes.ADD_LEADERS:
        return {...state, isLoading: false, errMess: null, leaders: action.payload};

      case ActionTypes.LEADERS_LOADING:
        return {...state, isLoading: true, errMess: null, leaders: []};

      case ActionTypes.LEADERS_FAILED:
        return {...state, isLoading: false, errMess: action.payload, leaders: []};

      default:
        return state;

      }

>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
};