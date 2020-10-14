import React, { Component, useEffect } from 'react';
import './App.scss';
import ProductList from './presentation/pages/products/ProductList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './presentation/pages/home/HomePage';
import ProductDetail from './presentation/pages/products/ProductDetail';
import DefaultLayout from './presentation/components/layouts/DefaultLayout';
import { connect, Provider } from 'react-redux';
import { configureStore } from './presentation/redux/store';
import { bindActionCreators } from 'redux';
import { initApplication } from './presentation/redux/actions/general/appInitiation';
import Routes from './Routes';

interface Product {
  id: number;
  name: string;
  image?: string;
}

interface IProps {
  initApplication: () => void;
  propsData: any;
}
interface IState {
  name: string;
  products: Product[];
  myProduct: any[];
}
const App: React.FC<IProps> = ({initApplication: handleInitApplication, propsData}) => {

useEffect(() => {
  handleInitApplication();
}, [propsData])

    return (
  
        <Routes />
      
    );
  }



const mapStateToProps = (state: any) => {
  return {
      propsData: state.productsReducer,
      categories: state.categoryReducer
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
  {
    initApplication
  },
  dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(App);