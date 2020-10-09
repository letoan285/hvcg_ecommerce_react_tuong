import { ofType } from "redux-observable";
import { ProductActionTypes, getProductsSuccess, getProductSuccess, getProductFail, getProductsFail } from '../../actions/products';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";

export const productsEpic = (action$: any, state$: any) => action$.pipe(
    ofType(ProductActionTypes.GET_PRODUCTS),
    exhaustMap(action => {
       
        return new Observable((obs) => {
            Axios.get('http://165.22.103.200:8083/api/products').then((response: any) => {
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

export const productEpic = (action$: any, state$: any) => action$.pipe(
    ofType(ProductActionTypes.GET_PRODUCT),
    exhaustMap((action: any) => {
        return new Observable((obs) => {
            Axios.get(`http://165.22.103.200:8083/api/products/${action.payload}`).then((response: any) => {
                const product = response.data.data;
                if(response.data){
                    obs.next(getProductSuccess(product));
                    obs.complete();
                } else {
                    obs.next(getProductFail('Something Wrong !'));
                    obs.complete();
                }
            
            });
        });
    })
);