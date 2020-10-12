import { ofType } from "redux-observable";
import { ProductActionTypes, getProductsSuccess, getProductsFail } from '../../actions/products';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";

export const usersEpic = (action$: any, state$: any) => action$.pipe(
    ofType(ProductActionTypes.GET_PRODUCT),
    exhaustMap(action => {
       
        return new Observable((obs) => {
            Axios.get('http://165.22.103.200:8083/api/users').then((response: any) => {
                const products = response.data.data;
                if(response.data){
                    obs.next(getProductsSuccess(products));
                    obs.complete();
                } else {
                    obs.next(getProductsFail('Something Wrong !'));
                    obs.complete();
                }
            
            });
        });
    })
);