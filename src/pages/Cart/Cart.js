import React, { Component } from 'react'
import CartItem from '../../components/CartItem/CartItem'
import { connect } from 'react-redux'

class Cart extends Component {
    render () {
        return (
            <CartItem />
        )
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    
}

export default connect()(Cart)