import React from 'react'
import styled from 'styled-components'
function AdminEditProduct() {
    return (
        <AddProductContainer className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Edit Product</h1>
            <form className='w-1/2 mt-5 flex flex-col'>
                <div className="form-group">
                    <label>Product Name</label>
                    <input type="text" className="form-control" placeholder="Product Name" />
                </div>
                <div className="form-group">
                    <label>Product Price</label>
                    <input type="number" className="form-control" placeholder="Product Price" />
                </div>
                <div className="form-group">
                    <label>Product Quantity</label>
                    <input type="number" className="form-control" placeholder="Product Quantity" />
                </div>
                <div className="form-group">
                    <label>Select Brands</label>
                    <select className="form-control">
                    <option>Nike</option>
                    <option>Puma</option>
                    <option>Adidas</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Select Category</label>
                    <select className="form-control">
                    <option>Men</option>
                    <option>Women</option>
                    <option>Kids</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Product Description</label>
                    <textarea class="form-control"rows="3" placeholder="Product Description"></textarea>
                </div>
                <img src="/images/shirt.jpg" width='100px' alt=""/>
                <input type="file"/><br/>
                <button className='bg-blue-500 px-3 py-1 mx-auto text-white rounded-lg shadow-xl hover:bg-blue-600 w-38 mt-3 focus:outline-none'>Update Product</button>
            </form>
        </AddProductContainer>
    )
}

export default AdminEditProduct
const AddProductContainer = styled.div`
    width: calc(100vw - 20%)
`