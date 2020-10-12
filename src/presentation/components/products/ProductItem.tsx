import React from 'react';
import { Link } from 'react-router-dom';
interface IProduct {
    id: number;
    name: string;
    price: number;
    category_id: number;
    description?: string;
    image?: string;
}

interface IProps {
    product: IProduct;
}

const ProductItem: React.FC<IProps> = ({ product }) => {

    return (
        <div className="col-4 mt-4" key={product.id}>
            <div className="card">
                <div className="card-header">

                    <h2>Product {product.id} - {product.name}</h2>
                </div>
                <div className="card-body">

                    <Link to={`/products/${product.id}`}><img style={{ width: '100%' }} src={product.image} /></Link>
                    <strong>Price: {product.price}</strong>
                </div>
                <div className="card-footer">
                    <Link to="Buy Now" className="btn btn-primary mt-2 mr-2">Buy Now</Link>
                    {/* <Button text="View More" className="btn btn-warning mt-2" onClick={() => ({})} /> */}
                    <Link className="btn btn-warning" to={`/products/${product.id}`}>View More</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductItem;