import React, { Component } from 'react'

class Report extends Component {
    render() {
        return (
            <div className="site-wrap">
                <div className="site-section">
                    <div className="container">
                        <div className="row mb-5">
                            <form className="col-md-12" method="post">
                                <div className="site-blocks-table">
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th className="product-thumbnail">Name</th>
                                                <th className="product-name">Address</th>
                                                <th className="product-price">Phone</th>
                                                <th className="product-size">Product</th>
                                                <th className="product-quantity">Quantity</th>
                                                <th className="product-price">Price</th>
                                                <th className="product-note">Note</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr><td>Tran Huy</td>
                                                <td>VN</td>
                                                <td>0914136118</td>
                                                <td>SP1</td>
                                                <td>2</td>
                                                <td>1000</td>
                                                <td>ship</td>
                                            </tr></tbody>
                                    </table>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Report