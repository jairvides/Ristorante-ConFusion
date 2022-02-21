import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
<<<<<<< HEAD
import { favorites } from './favorites';
import { Auth } from './auth';
=======
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
<<<<<<< HEAD
            auth: Auth,
            favorites,
=======
>>>>>>> 8cb360a18da1b49ddf819b630f99c2e6ee0dab44
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}