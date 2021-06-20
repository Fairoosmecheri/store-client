import React from 'react'
import styled from 'styled-components'

function AdminEditCategory() {
    return (
        <EditCategory className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Edit Category</h1>
            <form className='w-1/2 mt-5 flex flex-col'>
                <div className="form-group">
                    <label>Category Name</label>
                    <input type="text" className="form-control" placeholder="Category Name" />
                </div>
                <button className='bg-blue-500 px-3 py-1 mx-auto text-white rounded-lg shadow-xl hover:bg-blue-600 w-38 mt-3 focus:outline-none'>Update Category</button>
            </form>
        </EditCategory>
    )
}

export default AdminEditCategory
const EditCategory = styled.div`
`