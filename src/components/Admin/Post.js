import React, { Component } from 'react'

class Post extends Component {
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
                                <form className="form-horizontal form-label-left" action="/admin/postProduct" encType="multipart/form-data" method="POST">
                                    <div className="form-group row">
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="name">Tên Sản Phẩm <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" required name="name" className="form-control col-md-7 " />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="detail">Chi Tiết <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" required name="detail" className="form-control col-md-7 " />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="size">Size <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" required name="size" className="form-control col-md-7 " />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="control-label col-md-3" htmlFor="price">Giá <span className="required">*</span>
                                        </label>
                                        <div className="col-md-12">
                                            <input type="text" required name="price" className="form-control col-md-7 " />
                                        </div>
                                    </div>
                                    <br />
                                    <input type="file" name="image1" />
                                    <br />
                                    <br />
                                    <button type="submit" className="btn btn-primary">Tạo Sản Phẩm Mới</button>
                                    <button type="button" className="btn btn-primary"><a href="/" style={{ color: 'white', textDecoration: 'none' }}>Về trang chính</a></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post