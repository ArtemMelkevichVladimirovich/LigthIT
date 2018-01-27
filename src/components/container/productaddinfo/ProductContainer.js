import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductPresentational from './ProductPresentational';
import * as actionsCreators from '../../../store/actions';
class ProductContainer extends Component {
    constructor(props){
        super(props);
    }
    
    render() {
        return (
               <ProductPresentational product={this.props.product}/>
        );
    }
}

function mapStateToProps(state){
    return{
        product: state.product,
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actionsCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);

