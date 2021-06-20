import React from 'react'
import styled from 'styled-components'
function AdminEditBrand() {
    return (
        <EditBrand className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Edit Brand</h1>
            <form className='w-1/2 mt-5 flex flex-col'>
                <div className="form-group">
                    <label>Brand Name</label>
                    <input type="text" className="form-control" placeholder="Brand Name" />
                </div>
                <button className='bg-blue-500 px-3 py-1 mx-auto text-white rounded-lg shadow-xl hover:bg-blue-600 w-38 mt-3 focus:outline-none'>Update Brand</button>
            </form>
        </EditBrand>
    )
}

export default AdminEditBrand
const EditBrand = styled.div``