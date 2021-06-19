import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminProducts from './AdminProducts'
function Admin() {
    return (
        <div className='flex-col h-screen'>
            <AdminHeader />
            <div className='flex'>
                <AdminSidebar />
                <Switch> 
                    <Route exact path='/admin'>
                        <AdminDashboard />
                    </Route>
                    <Route exact path='/admin/products'>
                        <AdminProducts />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Admin
