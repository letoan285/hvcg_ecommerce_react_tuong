import React, { Component } from 'react';
import './App.scss';
import ProductList from './presentation/pages/products/ProductList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './presentation/pages/home/HomePage';
import ProductDetail from './presentation/pages/products/ProductDetail';
import DefaultLayout from './components/layouts/DefaultLayout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const rootReducer = () => { }

const store = createStore(rootReducer);

interface Product {
  id: number;
  name: string;
  image?: string;
}

interface IProps { }
interface IState {
  name: string;
  products: Product[];
  myProduct: any[];
}
class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'Tuong',
      products: [{ id: 1, name: 'product 1' }],
      myProduct: [{ name: 'myname' }]
    }
  }
  render() {

    return (
      <Provider store={store}>

        <BrowserRouter>
          <Switch>
            <Route exact path="/login" render={() => <h1>Login</h1>} />
            <Route exact path="/register" render={() => <h1>Register</h1>} />
            <Route path="/" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
