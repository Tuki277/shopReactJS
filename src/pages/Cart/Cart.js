import React, { Component } from 'react'
import Cart from './../../components/Cart/Cart'
import { connect } from 'react-redux'
import CartItem from '../../components/CartItem/CartItem'
import { actionDeleteProductInCart } from './../../actions/index'

class CartPages extends Component {

    showItemInCart = (cart) => {
        var { onDeleteProductInCart } = this.props
        var result = null
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <CartItem 
                        key = {index}
                        item = { item }
                        index = { index }
                        onDeleteProductInCart = { onDeleteProductInCart }
                    />
                )
            })
        }
        return result
    }

    render () {
        var { cart } = this.props
        return (
            <Cart>
                { this.showItemInCart(cart) }
            </Cart>
        )
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onDeleteProductInCart: (product) => {
            dispatch(actionDeleteProductInCart(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPages)