import { ofType } from "redux-observable";
import { ProductActionTypes } from '../actions/products';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

export const rootEpic = (action$: any, state$: any) => action$.pipe(
    ofType(ProductActionTypes.GET_PRODUCTS),
    exhaustMap(action => {
        return new Observable((obs) => {
            obs.next();
            obs.complete();
        });
    })
);