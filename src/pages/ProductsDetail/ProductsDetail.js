import React, { Component } from 'react'
import ShopDetails from './../../components/ShopDetails/ShopDetails'
import { connect } from 'react-redux'
import { actionGetProductByIdRequest } from './../../actions/index'

class ProductsDetails extends Component {

    componentDidMount() {
        var { match } = this.props
        if (match) {
            var id = match.params.id
            this.props.getProduct(id)
        }
    }

    render () {
        console.log(this.props)
        return (
            <div>
                <ShopDetails
                    products = { this.props.products }
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        products : state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        getProduct : (id) => {
            dispatch(actionGetProductByIdRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ProductsDetails)