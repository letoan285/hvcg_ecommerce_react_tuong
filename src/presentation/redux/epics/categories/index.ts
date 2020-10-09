import { ofType } from "redux-observable";
import { CategoryActionTypes,getCategoriesSuccess,getCategoriesFailed } from '../../actions/categories';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";

export const categoriesEpic = (action$: any, state$: any) => action$.pipe(
    ofType(CategoryActionTypes.GET_CATEGORIES),
    exhaustMap(action => {
       
        return new Observable((obs) => {
            Axios.get('http://165.22.103.200:8083/api/categories').then((response: any) => {
                const categories = response.data;
                if(response.data){
                    obs.next(getCategoriesSuccess(categories));
                    obs.complete();
                } else {
                    obs.next(getCategoriesFailed('Something Wrong !'));
                    obs.complete();
                }
            
            });
        });
    })
);