import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionAddProductRequest, actionDeleteProductRequest, actionFetchProductsRequest } from './../../actions/index'

class Post extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : '',
            image : null,
            detail : '',
            price : 0,
            color : '',
            quantity : 0,
            size : ''
        }
    }

    componentDidMount() {
        this.props.fetchAllProducts()
    }

    deleteProduct = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
            this.props.deleteProduct(id)
        }
    }

    showAllProducts = (products) => {
        var result = null
        if ( products.length > 0 ) {
            result = products.map((product, index) => {
                return (
                    <tr>
                        <td> { product.name } </td>
                        <td>
                            <img src = { product.image } style={{ width: '75%' }}/>
                        </td>
                        <td> { product.size } </td>
                        <td> { product.detail_product } </td>
                        <td> { product.price } </td>
                        <td> { product.color } </td>
                        <td> { product.quantity } </td>
                        <td>
                            <button 
                                type="button" 
                                class="btn btn-secondary"
                            >
                                    EDIT
                            </button>
                        </td>
                        <td>
                            <button 
                                type="button" 
                                class="btn btn-danger"
                                onClick = { () => this.deleteProduct(product.product_id) }
                            >
                                X
                            </button>
                        </td>
                    </tr>
                )
            })
        }
        return result
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.type === 'file' ? target.files[0] : target.value
        this.setState({
            [name] : value
        })
    }

    onClickHandler = () => {
        const data = new FormData()
        data.append('file', this.state.image)
    }

    onSave = (event) => {
        event.preventDefault()
        const data = new FormData()
        data.append('file', this.state.image)
        console.log(this.state.image)
        var { name, image, detail, price, color, quantity, size } = this.state
        var product = {
            name : name,
            image : image,
            detail : detail,
            price : price,
            color : color,
            quantity : quantity,
            size : size
        }
        console.log(product)
        this.props.addProducts(product)
    }

    render() {
        return (
            <div className="container body">
                <div className="main_container">
                    {/* page content */}
                    <div className="right_col" role="main">
                        <div className="x_panel">
                            <div className="x_title">
                                <h2>Đăng sản phẩm</h2>
                                <div className="clearfix" />
                            </div>
                            <div className="x_content">
                                <form className="form-horizontal form-label-left" method="POST" onSubmit = { this.onSave } enctype="multipart/form-data">
                                    <div className="form-group row">
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="name">Tên Sản Phẩm <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input 
                                                type="text" 
                                                required name="name" 
                                                className="form-control col-md-7 " 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="detail">Chi Tiết <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input 
                                                type="text" 
                                                required name="detail" 
                                                className="form-control col-md-7 " 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="size">Size <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input 
                                                type="text" 
                                                required name="size" 
                                                className="form-control col-md-7 " 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Giá <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input 
                                                type="text" 
                                                required name="price" 
                                                className="form-control col-md-7 " 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Màu <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input 
                                                type="text" 
                                                required name="color" 
                                                className="form-control col-md-7 " 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Số lượng <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input 
                                                type="text" 
                                                required name="quantity" 
                                                className="form-control col-md-7 " 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                    <br />
                                    <input type="file" name="image" onChange = { this.onChange } />
                                    <br />
                                    <br />
                                    <button type="submit" className="btn btn-primary">Tạo Sản Phẩm Mới</button>
                                    <button type="button" className="btn btn-primary"><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Về trang chính</a></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Size</th>
                                                <th>Detail</th>
                                                <th>Price</th>
                                                <th>Color</th>
                                                <th>Quantity</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                                { this.showAllProducts(this.props.products) }
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
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
        fetchAllProducts : () => {
            dispatch(actionFetchProductsRequest())
        },
        addProducts : (product) => {
            dispatch(actionAddProductRequest(product))
        },
        deleteProduct : (id) => {
            dispatch(actionDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)