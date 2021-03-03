import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Checkout extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name : '',
            address : '',
            phone : '',
            note : '',
            order : []
        }
    }

    onChange = (event) => {
        var target = event.target
        var name = target.name
        var value = target.value
        this.setState({
            [name] : value
        })
    }

    onSave = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="bg-light py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 mb-0"><a href="index.html">Home</a> <span className="mx-2 mb-0">/</span> <a href="cart.html">Cart</a> <span className="mx-2 mb-0">/</span> <strong className="text-black">Checkout</strong></div>
                        </div>
                    </div>
                </div>
                <form method="POST" onSubmit = { this.onSave }>
                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mb-5 mb-md-0">
                                    <h2 className="h3 mb-3 text-black">Billing Details</h2>
                                    <div className="p-3 p-lg-5 border">
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_companyname" className="text-black">Name <span className="text-danger">*</span> </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="c_companyname"
                                                    name="name"
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Address <span className="text-danger">*</span></label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="c_address"
                                                    name="address"
                                                    placeholder="address"
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Phone <span className="text-danger">*</span></label>
                                                <input 
                                                    type="text"
                                                    className="form-control" 
                                                    id="c_address" name="phone" 
                                                    placeholder="phone" 
                                                    onChange = { this.onChange }
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="c_order_notes" className="text-black">Order Notes</label>
                                            <textarea
                                                name="note"
                                                id="c_order_notes"
                                                cols={30} rows={5}
                                                className="form-control"
                                                placeholder="Write your notes here..."
                                                defaultValue={""} 
                                                onChange = { this.onChange }
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="row mb-5">
                                        <div className="col-md-12">
                                            <h2 className="h3 mb-3 text-black">Your Order</h2>
                                            <div className="p-3 p-lg-5 border">
                                                <table className="table site-block-order-table mb-5">
                                                    <thead>
                                                        <tr><th>Product</th>
                                                            <th>Total</th>
                                                        </tr></thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Top Up T-Shirt <strong className="mx-2">x</strong> 1</td>
                                                            <td>$250.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Polo Shirt <strong className="mx-2">x</strong>   1</td>
                                                            <td>$100.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-black font-weight-bold"><strong>Cart Subtotal</strong></td>
                                                            <td className="text-black">$350.00</td>
                                                        </tr>
                                                        <tr>
                                                            <td className="text-black font-weight-bold"><strong>Order Total</strong></td>
                                                            <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="form-group">
                                                    {/* <Link to={'/thankyou'}> */}
                                                    <button type="submit" className="btn btn-primary btn-lg py-3 btn-block" onclick="window.location='thankyou.html'">Place Order</button>
                                                    {/* </Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        cart : state.cart
    }
}

export default connect(mapStateToProps, null)(Checkout)