import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminProducts from './AdminProducts'
import AdminAddProduct from './AdminAddProduct'
import styled from 'styled-components'
import AdminEditProduct from './AdminEditProduct'
function Admin() {
    return (
        <div className='flex-col h-screen'>
            <AdminHeader />
            <div className='flex'>
                <AdminSidebar />
                <AdminView className='flex-1 pt-16'>
                    <Switch> 
                        <Route exact path='/admin'>
                            <AdminDashboard />
                        </Route>
                        <Route exact path='/admin/products'>
                            <AdminProducts />
                        </Route>
                        <Route exact path='/admin/add-product'>
                            <AdminAddProduct />
                        </Route>
                        <Route exact path='/admin/edit-product'>
                            <AdminEditProduct />
                        </Route>
                    </Switch>
                </AdminView>
            </div>
        </div>
    )
}

export default Admin

const AdminView = styled.div`
    padding-left: 20vw;
`