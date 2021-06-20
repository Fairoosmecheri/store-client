import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
function AdminProducts() {
    const history = useHistory()
    return (
        <ProductsContainer className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Products</h1>
            <button onClick={()=>history.push('/admin/add-product')} className='bg-blue-500 px-5 py-2 text-white rounded-lg shadow-xl hover:bg-blue-600 ml-auto mr-5 mt-3 focus:outline-none'>Add Products</button>
            <table className='table mt-5'>
                <thead>
                    <tr className='text-center'>
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
                    <tr className='text-center'>
                        <td>1</td>
                        <td>Men's Denim Shirt</td>
                        <td><img className='w-10' src="/images/shirt.jpg"  alt=""/></td>
                        <td>Men Casuals</td>
                        <td>3000</td>
                        <td>20</td>
                        <td>
                            <button className='bg-green-500 px-3 py-1 text-white rounded-lg shadow-xl hover:bg-green-600 mx-1 focus:outline-none'>View</button>
                            <button className='bg-red-500 px-3 py-1 text-white rounded-lg shadow-xl hover:bg-red-600 mx-1 focus:outline-none'>Delete</button>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td>1</td>
                        <td>Men's Denim Shirt</td>
                        <td><img className='w-10' src="/images/shirt.jpg"  alt=""/></td>
                        <td>Men Casuals</td>
                        <td>3000</td>
                        <td>20</td>
                        <td>
                            <button onClick={()=>history.push('/admin/edit-product')} className='bg-green-500 px-3 py-1 text-white rounded-lg shadow-xl hover:bg-green-600 mx-1 focus:outline-none'>View</button>
                            <button className='bg-red-500 px-3 py-1 text-white rounded-lg shadow-xl hover:bg-red-600 mx-1 focus:outline-none'>Delete</button>
                        </td>
                    </tr>
                    <tr className='text-center'>
                        <td>1</td>
                        <td>Men's Denim Shirt</td>
                        <td><img className='w-10' src="/images/shirt.jpg"  alt=""/></td>
                        <td>Men Casuals</td>
                        <td>3000</td>
                        <td>20</td>
                        <td>
                            <button className='bg-green-500 px-3 py-1 text-white rounded-lg shadow-xl hover:bg-green-600 mx-1 focus:outline-none'>View</button>
                            <button className='bg-red-500 px-3 py-1 text-white rounded-lg shadow-xl hover:bg-red-600 mx-1 focus:outline-none'>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </ProductsContainer>
    )
}

export default AdminProducts

const ProductsContainer = styled.div`
    width: 70vw;
`