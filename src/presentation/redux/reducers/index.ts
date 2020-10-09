import { combineReducers } from 'redux';
import { productsReducer } from './products';
import { usersReducer } from './users';
import { categoryReducer } from './categories';

const appReducer = combineReducers({
    productsReducer,
    usersReducer,
    categoryReducer
});
export const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}