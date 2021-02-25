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