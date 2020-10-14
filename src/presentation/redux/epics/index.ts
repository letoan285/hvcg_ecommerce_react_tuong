import { combineEpics, ofType } from "redux-observable";
import { ProductActionTypes, getProductsSuccess, getProductsFail } from '../actions/products';
import { exhaustMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import Axios from "axios";
import { categoriesEpic } from './categories';
import { productsEpic, productEpic } from './products';
import { usersEpic } from './users';
import { initAppEpic } from "./general/appInitiation";


export const rootEpic = combineEpics(initAppEpic, categoriesEpic, productsEpic, productEpic, usersEpic);