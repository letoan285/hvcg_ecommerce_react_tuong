
export enum ProductActionTypes {
    GET_PRODUCTS = '[Products] GET_PRODUCTS',
    GET_PRODUCT = '[Products] GET_PRODUCT',
    CREATE_PRODUCT = '[Products] CREATE_PRODUCT',
    DELETE_PRODUCT = '[Products] DELETE_PRODUCT',
    UPDATE_PRODUCT = '[Products] UPDATE_PRODUCT',
}

export const getProducts = () => {
    return {
        type: ProductActionTypes.GET_PRODUCTS
    }
}

export const getProduct = (id: number) => {
    return {
        type: ProductActionTypes.GET_PRODUCT,
        payload: id
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