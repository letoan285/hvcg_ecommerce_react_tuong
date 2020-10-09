
export enum ProductActionTypes {
    GET_PRODUCTS = '[Products] GET_PRODUCTS',
    GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
    GET_PRODUCTS_FAILED = '[Products] GET_PRODUCTS_FAILED',

    GET_PRODUCT = '[Products] GET_PRODUCT',
    GET_PRODUCT_SUCCESS = '[Products] GET_PRODUCT_SUCCESS',
    GET_PRODUCT_FAILED = '[Products] GET_PRODUCT_FAILED',

    CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
    DELETE_PRODUCT = '[Products] DELETE_PRODUCT',
    UPDATE_PRODUCT = '[Products] UPDATE_PRODUCT',
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    image: string
}

export const getProducts = () => {
    return {
        type: ProductActionTypes.GET_PRODUCTS
    }
}

export const getProductsSuccess = (payload: Array<IProduct>) => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductsFail = (error: string) => {
    return {
        type: ProductActionTypes.GET_PRODUCTS_FAILED,
        payload: error
    }
}

export const getProduct = (id: number) => {
    return {
        type: ProductActionTypes.GET_PRODUCT,
        payload: id
    }
}

export const getProductSuccess = (product: IProduct) => {
    return {
        type: ProductActionTypes.GET_PRODUCT_SUCCESS,
        payload: product
    }
}

export const getProductFail = (error: string) => {
    return {
        type: ProductActionTypes.GET_PRODUCT_FAILED,
        payload: error
    }
}

export const createProduct = (product: any) => {
    return {
        type: ProductActionTypes.CREATE_PRODUCT,
        payload: product
    }
}

export const updateProduct = (product: any) => {
    return {
        type: ProductActionTypes.UPDATE_PRODUCT,
        payload: product
    }
}

export const deleteProduct = (id: number) => {
    return {
        type: ProductActionTypes.DELETE_PRODUCT,
        payload: id
    }
}