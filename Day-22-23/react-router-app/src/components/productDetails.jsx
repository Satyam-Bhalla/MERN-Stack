import React from 'react';

class ProductDetails extends React.Component {
    handleRedirect = () => {
        // Navigate top /products
        this.props.history.replace("/products");
    }
    render() { 
        const {id} = this.props.match.params;
        return ( 
            <div>
                <h1>Product Detail - {id}</h1>
                <button onClick={this.handleRedirect}>Go To Products</button>
            </div>
         );
    }
}
 
export default ProductDetails;