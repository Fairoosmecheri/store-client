import React from 'react'
import styled from 'styled-components'

function AdminHeader() {
    return (
        <AdminHeaderContainer className='px-10 w-full h-16 shadow-md fixed'>
            <div className='flex pt-1 items-center justify-between'>
                <img src="/images/logonobg.png" className='h-14' alt=""/>
                <span className='cursor-pointer hover:underline uppercase'>Logout</span>
            </div>
        </AdminHeaderContainer>
    )
}

export default AdminHeader
const AdminHeaderContainer = styled.div`
    background: white;
` 