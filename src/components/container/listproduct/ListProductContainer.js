import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionsCreators from '../../../store/actions';
import ListProductContainer from './ListProductPresentational'
import styles from './ListProductStyles';

class ListProductContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            objectProducs: [],
        }
    }

    getStateStore(){
        console.log('======' + this.props.state + '=======')
    }
    
    showListProduct(product) {
        return (
            product.map((item, index) => {
                return (
                    <View key={index}>
                        <TouchableOpacity onPress={ () => this.getStateStore()}>
                            <Image
                                source={{ uri: `http://smktesting.herokuapp.com/static/${item.img}` }}
                                style={styles.img} />
                            <Text style={styles.text}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>
                )
            })
        );
    }

    componentDidMount() {
        fetch('http://smktesting.herokuapp.com/api/products/')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    objectProducs: responseJson
                });
            }).catch((error) => {
                alert(error)
            });
    }

    getObjects() {
        return this.state.objectProducs;
    }

    render() {
        return (
            <ScrollView>
                {
                    this.showListProduct(this.getObjects())
                }
            </ScrollView>
        );
    }
}


function mapStateToProps(state){
    return{
        product: state.list
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(actionsCreators, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProductContainer);
