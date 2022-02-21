import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
<<<<<<< HEAD
        errMess: null,
        comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};
=======
    errMess: null,
    comments: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return{ ...state, isLoading: false, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
        return{ ...state, isLoading: false, errMess: action.payload, comments: [] }
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};

        default:
<<<<<<< HEAD
            return state;
    }
}
=======
          return state;
      }
};
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
