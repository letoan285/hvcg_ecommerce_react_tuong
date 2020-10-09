import { IAction, IState } from "../../../../shared/interface";
import { CategoryActionTypes } from '../../actions/categories';
interface MyData {
    id: number;
    name: string
}

const initialState: IState<any> = {
    data: undefined,
    loaded: false,
    loading: false,
    message: '',
    sucess: false
}

export function categoryReducer(state = initialState, action: IAction<any>){
    switch(action.type){
        
        case CategoryActionTypes.GET_CATEGORIES_SUCCESS: {
            return {
                ...state,
                data: {
                    categories: action.payload
                }
            }
        }
        case CategoryActionTypes.GET_CATEGORIES_FAILED: {
            return {
                ...state,
                message: action.payload
            }
        }
        default: {
            return state;
        }
    }
}
