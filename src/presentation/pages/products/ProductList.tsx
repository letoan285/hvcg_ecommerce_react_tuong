import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ProductDetail from './ProductDetail';
import ProductItem from '../../../components/products/ProductItem';
import { bindActionCreators } from 'redux';
import { getProducts } from '../../redux/actions/products';
import { getCategories } from '../../redux/actions/categories';

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
interface IProps {
    propsData: any;
    getProducts: () => void;
    getCategories: () => void;
    categories: any;

}
const ProductList: React.FC<IProps> = ({propsData, categories, getCategories: handleGetCategories, getProducts: handleGetProducts}) => {



    // const [categories, setCategories] = useState<ICategory[]>([]);
    const [products, setProducts] = useState<IProduct[]>([]);

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

    
    useEffect(() => {
        handleGetProducts();
        handleGetCategories();
    }, []);

    if(!propsData.data || !categories.data){
        return <>Loading...</>
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
                            categories.data.categories.map((item: ICategory) => {
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
                            propsData.data.products.map((item: IProduct) => {
                                return <ProductItem product={item} key={item.id} />;
                            })
                        }
                    </div>
                </div>

            </div>

        </div>
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
        getProducts,
        getCategories
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);