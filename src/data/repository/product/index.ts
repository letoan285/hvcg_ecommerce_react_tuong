import ProductCloud from './cloud';
import ProductStorage from './storage';

export default class ProductRepository {
    getAll = () => {
        return ProductCloud.getAll();
    }
    getOne = (id: number) => {
        return ProductCloud.getOne(id);
    }
    getToken = () => {
        return ProductStorage.getToken();
    }
}