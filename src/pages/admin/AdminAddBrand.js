import React from 'react'
import styled from 'styled-components'

function AdminAddBrand() {
    return (
        <AddBrand className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Add Brand</h1>
            <form className='w-1/2 mt-5 flex flex-col'>
                <div className="form-group">
                    <label>Brand Name</label>
                    <input type="text" className="form-control" placeholder="Brand Name" />
                </div>
                <button className='bg-blue-500 px-3 py-1 mx-auto text-white rounded-lg shadow-xl hover:bg-blue-600 w-38 mt-3 focus:outline-none'>Add Brand</button>
            </form>
        </AddBrand>
    )
}

export default AdminAddBrand
const AddBrand = styled.div``