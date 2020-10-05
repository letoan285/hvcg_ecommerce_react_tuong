import React from 'react';

interface IRouter {
    path: string;
    component: any;
    exact?: boolean;
    name?: string;
}

const ProductList = React.lazy(() => import('../pages/products/ProductList'));
const ProductDetail = React.lazy(() => import('../pages/products/ProductDetail'));
const ContactUs = React.lazy(() => import('../pages/contact/ContactUs'));
const HomePage = React.lazy(() => import('../pages/home/HomePage'));
const UserList = React.lazy(() => import('../pages/users/UserList'));


const routes: IRouter[] = [
    { path: '/', exact: true, name: 'Home Page', component: HomePage },
    { path: '/products', exact: true, name: 'Product List', component: ProductList },
    { path: '/products/:id', exact: true, name: 'Product Detail', component: ProductDetail },
    { path: '/contact', exact: true, name: 'Contact Us', component: ContactUs },
    { path: '/users', name: 'Users', component: UserList, exact: true }
];

export default routes;