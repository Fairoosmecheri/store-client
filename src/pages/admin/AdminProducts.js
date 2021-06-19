import React from 'react'
import styled from 'styled-components'

function AdminProducts() {
    return (
        <ProductsContainer className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Products</h1>
            <button className='bg-blue-500 px-5 py-2 text-white rounded-lg shadow-xl hover:bg-blue-600 ml-auto mr-5 mt-3 focus:outline-none'>Add Products</button>
            <table className='table mt-5'>
                <thead>
                    <tr>
                        <th>Sl. No</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </ProductsContainer>
    )
}

export default AdminProducts

const ProductsContainer = styled.div`
    width: calc(100vw - 20%)
`