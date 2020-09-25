import React, { Component } from "react";
import ProductItem from "./ProductItem";

interface IProps {
    products: any[];
}
interface IState {
    products: any[];
}
const imgSrc = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ8GqqchHcHfdcbQqSihTxRsMjgrmjFuyRvz3zycSHq6tTbd4r6_uyjS9Igcg&usqp=CAc';

class ProductList extends Component<IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {
            products: [
                {id: 1, name: 'iphone 5s', image: imgSrc, price: 1200},
                {id: 2, name: 'Samsung galaxy', image: imgSrc, price: 1000},
                {id: 3, name: 'Huawai s4', image: imgSrc, price: 700},
            ]
        }
    }
    render(){
        return (
            <div>
                <ProductItem title="Product List" productList={this.state.products}/>
            </div>
        );
    }
}
export default ProductList;