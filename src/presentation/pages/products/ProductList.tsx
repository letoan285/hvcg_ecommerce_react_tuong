import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import ProductItem from '../../../components/products/ProductItem';

interface ICategory {
    id: number;
    name: string;
    slug?: string;
    status?: number;
    image?: string;
}

interface IProduct {
    id: number;
    name: string;
    price: number;
    category_id: number;
    description?: string;
    image?: string;
}

const ProductList = () => {

    const defaultCategories = [
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Samsung' }
    ];

    const productDefault: IProduct[] = [
        { id: 1, name: 'iphone 5', price: 2300, category_id: 1, image: 'https://duchungmobile.vn/wp-content/uploads/2016/03/5-den.jpg' },
        { id: 2, name: 'Samsung galaxy', price: 1300, category_id: 2, image: 'https://hc.com.vn/i/ecommerce/media/GS.003291_FEATURE_55789.jpg' },
        { id: 3, name: 'Ipad 5', price: 4500, category_id: 1, image: 'https://dienthoaihay.vn/images/products/2020/06/23/large/ipad-2-xam_1592899330.jpg' }
    ];

    const [categories, setCategories] = useState<ICategory[]>(defaultCategories);
    const [products, setProducts] = useState<IProduct[]>(productDefault);

    const changeParentTitle = (productName: string) => {
        // changeTitle(productName);
    }
    const viewMoreDetail = (product: any) => {
        // viewMore(product);

    }

    const addToCart = (product: any) => {
        // this.props.getProduct(product);
    }

    const categoryList = () => {

    }





    return (
        <div className="container">
            <div className="row">
                <h2>Title: ---</h2>


            </div>
            <div className="row">
                <div className="col-3">
                    <ul className="list-group mt-4">
                        <li className="list-group-item active">Category</li>
                        {
                            categories.map((item: ICategory) => {
                                return (
                                    <li className="list-group-item" key={item.id}>
                                        <Link to={`/categories/${item.id}`}>{item.name}</Link>
                                    </li>
                                );
                            })
                        }


                    </ul>
                </div>
                <div className="col-9">
                    <div className="row">

                        {
                            products.map((item: IProduct) => {
                                return <ProductItem product={item} key={item.id} />;
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
    );


}

// const mapStateToProps = (state) => {
//     return {
//         propsData: state.product,
//         productList: state.productReducer,
//         categoryList: state.categoryReducer
//     }
// }

// const mapDispatchToProps = (dispatch) => bindActionCreators(
//     {
//         getOne,
//         getProductsApi,
//         getCategoriesApi
//     },
//     dispatch
// )

export default ProductList;