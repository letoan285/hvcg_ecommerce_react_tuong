import { IUseCase } from "../../../shared/interface/common/usecase";
import ProductRepository from '../../../data/repository/product';

export default class GetProductsUseCase implements IUseCase {
    productRepository: ProductRepository;
    constructor(){
        this.productRepository = new ProductRepository();
    }
    validate = () => {
        let email ='toan@gmail.com';
        if(email){
            return true;
        }
        return false;
    }
    execute = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            if(this.validate()){
                this.productRepository.getAll().then((res) => {

                    resolve(res)
                })
            } else {
                reject('Email is required');
            }
           
        })
    };
}