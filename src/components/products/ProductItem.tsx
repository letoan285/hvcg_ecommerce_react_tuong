import React from 'react';
interface IProductProps {
    productList: any[];
    title: string;
}
const ProductItem: React.FC<IProductProps> = (props) => {
    const {title, productList} = props;
    console.log('productList', productList)
    return (
    <div>Product Item {title}</div>
    );
}

export default ProductItem;