export enum CategoryActionTypes {
    GET_CATEGORIES = '[Categories] GET_CATEGORIES',
    GET_CATEGORIES_SUCCESS = '[Categories] GET_CATEGORIES_SUCCESS',
    GET_CATEGORIES_FAILED = ' GET_CATEGORIES_FAILED'
}

export const getCategories = () => ({
    type: CategoryActionTypes.GET_CATEGORIES
});

export const getCategoriesSuccess = (payload: any) => ({
    type: CategoryActionTypes.GET_CATEGORIES_SUCCESS,
    payload
});

export const getCategoriesFailed = (error: string) => ({
    type: CategoryActionTypes.GET_CATEGORIES_FAILED,
    payload: error
});