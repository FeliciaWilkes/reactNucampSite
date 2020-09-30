import { createStore, combineReducers } from 'redux';
import { Campsites } from './campsites';
import { Comments } from './comments';
import { Partners } from './partners';
import { Promotions } from './promotions';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers(
            {
                comments: Comments,
                campsites: Campsites,
                partners: Partners,
                promotions: Promotions
            })
    );

    return store;
};