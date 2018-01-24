import React, { Component } from 'react';
import ListProductPresentational from './ListProductPresentational';
import {
    View,
    ScrollView,
    Text
}
    from 'react-native';
import styles from './ListProductStyles';
class ListProductContainer extends Component {

    constructor() {
        super();
        this.state = {
            objectProducs: [],
        }
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
        let product = this.getObjects();
        return (
            <ScrollView contentContainerStyle={styles.container}>
                {
                    product.map((item, index) => {
                        return (
                            <ListProductPresentational
                                key={index}
                                name={item}
                            />
                        )
                    })
                }
            </ScrollView>
        );
    }
}

export default ListProductContainer;