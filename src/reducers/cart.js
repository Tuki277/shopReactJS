import * as Types from './../constants/ActionTypes'

var data = JSON.parse(localStorage.getItem('CART'))
var initialState = data ? data : []

var findProductInCart = (cart, product) => {
    console.log('func find product in reducer ======= ', product[0])
    console.log('func find product in cart ============= ', cart[0])
    var index = -1 // = -1 là không tìm thấy
    if(cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].products[0].product_id === product[0].product_id) {
                index = i
                break
            }
        }
    }
    return index
}

var cart = (state = initialState, action) => {
    var { products, quantity } = action
    var index = -1
    switch(action.type) {
        case Types.ADD_PRODUCTS_TO_CART:
            index = findProductInCart(state, products)
            if (index !== -1) {
                state[index].quantity += quantity
            } else {
                state.push({
                    products : products,
                    quantity : quantity
                })
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        default :
            return [...state]
    }
}

export default cart