import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getProduct } from '../../redux/actions/products';
interface IProduct {
    id: number;
    name: string;
    price: number;
    category_id: number;
    description?: string;
    image?: string;
}

interface IProps {
    // product: IProduct;
    propsData: any;
    getProduct: (id: string) => void;
}

const ProductDetail: React.FC<any> = ({propsData, getProduct: handleGetProduct}) => {
    const product = { id: 1, name: 'gaegaweg', price: 2000, image: 'gawega' };
    const params: any = useParams();
    useEffect(() => {
        handleGetProduct(params.id);
        

    }, [])
    console.log('propsData', propsData);
    if(!propsData.data?.product){
        return <>Loading...</>
    }
    return (
        <div className="col-4 mt-4" key={product.id}>
            <div className="card">
                <div className="card-header">

                    <h2>Product {propsData.data.product.id} - {propsData.data.product.name}</h2>
                </div>
                <div className="card-body">

                    <Link to={`/products/${product.id}`}><img style={{ width: '100%' }} src={propsData.data.product.image} /></Link>
                    <strong>Price: {propsData.data.product.price}</strong>
                </div>
                <div className="card-footer">
                    <Link to="Buy Now" className="btn btn-primary mt-2 mr-2">Buy Now</Link>
                    {/* <Button text="View More" className="btn btn-warning mt-2" onClick={() => ({})} /> */}
                    <Link className="btn btn-warning" to={`/products/${propsData.data.product.id}`}>View More</Link>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        propsData: state.productsReducer,
    }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators(
    {
        getProduct
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
