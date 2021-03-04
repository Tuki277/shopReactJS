import * as Types from './../constants/ActionTypes'
import callApi from './../utils/apiCall'

export const actionFetchProductsRequest = () => {
    return dispatch => {
        return callApi('products', 'GET', null).then(res => {
            dispatch(actionFetchProducts(res.data))
        })
    }
}

export const actionFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}

export const actionGetProductByIdRequest = (id) => {
    return dispatch => {
        return callApi(`products/${id}`, 'GET', null).then(res => {
            dispatch(actionGetProductById(res.data))
        })
    }
}

export const actionGetProductById = (product) => {
    return {
        type: Types.GET_PRODUCT_BY_ID,
        product
    }
}

export const actionAddProductToCart = (products, quantity) => {
    return {
        type: Types.ADD_PRODUCTS_TO_CART,
        products,
        quantity
    }
}

export const actionDeleteProductInCart = (products) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        products
    }
}

export const checkoutRequest = (products) => {
    return dispatch => {
        return callApi('cart/products', 'POST', products).then(res => {
            dispatch(checkout(res.data))
        })
    }
}

export const checkout = (products) => {
    return {
        type : Types.CHECKOUT,
        products
    }
}