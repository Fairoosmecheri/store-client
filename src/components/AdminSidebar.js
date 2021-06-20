import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
function AdminSidebar() {
    const history = useHistory()
    return (
        <AdminSidebarContainer className='w-1/5 border-r-2 text-black flex flex-col p-5 absolute top-16'>
            <span onClick={()=>history.push('/admin')}>Dashboard</span>
            <span onClick={()=>history.push('/admin/products')}>Products</span>
            <span>Categories</span>
            <span>Orders</span>
            <span>Users</span>
        </AdminSidebarContainer>
    )
}

export default AdminSidebar
const AdminSidebarContainer = styled.div`
    height: calc(100vh - 4rem);
    span {
        margin: 5px 0;
        cursor: pointer;

    }
`