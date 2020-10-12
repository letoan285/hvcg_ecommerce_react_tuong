import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactUs from '../../pages/contact/ContactUs';
import HomePage from '../../pages/home/HomePage';
import ProductDetail from '../../pages/products/ProductDetail';
import ProductList from '../../pages/products/ProductList';
import Header from '../header/Header';
import routes from '../../router/router';

const loading = () => <div>Loading...</div>;

interface IProps { }
const DefaultLayout: React.FC<IProps> = (props) => {
    return (
        <Suspense fallback={loading()}>
            <Switch>
                <div>
                    <Header />
                    {
                        routes.map((route, index) => {
                            return route.component ? (
                                <Route
                                    path={route.path}
                                    key={index}
                                    exact={route.exact}
                                    render={(props: any) => (<route.component {...props} />)} />
                            ) : (null);
                        })
                    }
                </div>
            </Switch>
        </Suspense>
    );
}

export default DefaultLayout;