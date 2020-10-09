export interface IState<T> {
    sucess: boolean;
    data: T;
    message: string;
    loading: boolean;
    loaded: boolean;
}

export interface IAction<T> {
    type: string;
    payload?: T
}