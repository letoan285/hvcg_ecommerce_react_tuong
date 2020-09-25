import React, { Component } from 'react';
import './App.scss';
import ProductList from './components/products/ProductList';
interface Product {
  id: number;
  name: string;
  image?: string;
}

interface IProps {}
interface IState {
  name: string;
  products: Product[];
  myProduct: any[];
}
class App extends Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
      name: 'Tuong',
      products: [{id: 1, name: 'product 1'}],
      myProduct: [{name: 'myname'}]
    }
  }
  render() {

    return (
      <div className="App">
        <h2>Hello React {this.state.name}</h2>
        <ProductList products={this.state.myProduct} />
      </div>
    );
  }
}

export default App;
