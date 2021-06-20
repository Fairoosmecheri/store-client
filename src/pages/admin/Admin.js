import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AdminHeader from '../../components/AdminHeader'
import AdminSidebar from '../../components/AdminSidebar'
import AdminDashboard from './AdminDashboard'
import AdminProducts from './AdminProducts'
import AdminAddProduct from './AdminAddProduct'
import styled from 'styled-components'
import AdminEditProduct from './AdminEditProduct'
import AdminCategories from './AdminCategories'
import AdminAddCategory from './AdminAddCategory'
import AdminEditCategory from './AdminEditCategory'
import AdminBrands from './AdminBrands'
import AdminAddBrand from './AdminAddBrand'
import AdminEditBrand from './AdminEditBrand'
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
                        <Route exact path='/admin/categories'>
                            <AdminCategories />
                        </Route>
                        <Route exact path='/admin/add-category'>
                            <AdminAddCategory />
                        </Route>
                        <Route exact path='/admin/edit-category'>
                            <AdminEditCategory />
                        </Route>
                        <Route exact path='/admin/brands'>
                            <AdminBrands />
                        </Route>
                        <Route exact path='/admin/add-brand'>
                            <AdminAddBrand />
                        </Route>
                        <Route exact path='/admin/edit-brand'>
                            <AdminEditBrand />
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