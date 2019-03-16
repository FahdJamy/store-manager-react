import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Grid, Segment, Dimmer, Loader } from 'semantic-ui-react';

import Product from '../../components/Product/Product';
import * as actions from '../../store/actions/index';
import './Product.css';

export class Products extends Component {

    componentDidMount () {
        this.props.getProducts()
    }
    
    render () {
        this.products = (
            <div className="ProductsLoader">
                <Dimmer active inverted>
                    <Loader size='massive'>Loading</Loader>
                </Dimmer>
            </div>
        )
        if (this.props.products !== null) {
            this.products = this.props.products.Products.map(product => {
                return (
                        <Product
                            key={product.id}
                            productName={product.product_name}
                            productPrice={product.price}
                            stock={product.stock}/>
                )
            })
        }
        return (
            <div className="AllProducts" >
                <Segment padded="very">
                    <Grid>
                            {this.products}
                    </Grid> 
                </Segment>
            </div>
        )
    }
}

export const mapStateToProps = state => {
    return {
        products: state.products.products,
        loading: state.products.loading
    }
}

export const mapDispatchToProps = dispatch => {
    return {
        getProducts: () => dispatch(actions.getAllAvailableProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
