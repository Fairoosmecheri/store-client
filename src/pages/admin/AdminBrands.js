import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
function AdminBrands() {
    const history = useHistory()
    return (
        <BrandsContainer className='m-5 flex flex-col items-center'>
            <h1 className='uppercase font-bold text-2xl'>Brands</h1>
            {/* <button onClick={()=>history.push('/admin/add-category')} className='bg-blue-500 px-5 py-2 text-white rounded-lg shadow-xl hover:bg-blue-600 ml-auto mr-5 mt-3 focus:outline-none'>Add Category</button> */}
            <BrandsWrapper className='flex mr-auto mt-5'>
                <Brands className='flex flex-col p-3 w-80 bg-gray-100 shadow-lg rounded-lg m-3'>
                    <Header className='flex justify-between items-center px-2 border-b-2 pb-2 border-black'>
                        <h2>Brands</h2>
                        <AiOutlinePlusCircle onClick={()=>history.push('/admin/add-brand')}  size='20' className='cursor-pointer' />
                    </Header>
                    <Body className='mt-3'>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>Nike</span>
                            <FiEdit2 size='20' className='hover:text-green-800' onClick={()=>history.push('/admin/edit-brand')}/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>Puma</span>
                            <FiEdit2 size='20' className='hover:text-green-800' onClick={()=>history.push('/admin/edit-brand')}/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>Adidas</span>
                            <FiEdit2 size='20' className='hover:text-green-800' onClick={()=>history.push('/admin/edit-brand')}/>
                        </Content>
                    </Body>
                </Brands>
                <Products className='flex flex-col p-3 w-80 bg-gray-100 shadow-lg rounded-lg m-3'>
                    <Header className='flex justify-between items-center px-2 border-b-2 pb-2 border-black'>
                        <h2>Products</h2>
                        <AiOutlinePlusCircle onClick={()=>history.push('/admin/add-product')}  size='20' className='cursor-pointer' />
                    </Header>
                    <Body>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        <Content className='flex border-b-2 my-2 cursor-pointer justify-between hover:bg-white p-3 rounded-xl hover:border-transparent'>
                            <span>US Polo Casual Shirt</span>
                            <FiEdit2 size='20' className='hover:text-green-800'/>
                        </Content>
                        
                        
                    </Body>
                </Products>
                
            </BrandsWrapper>
        </BrandsContainer>
    )
}

export default AdminBrands


const BrandsContainer = styled.div`

`
const BrandsWrapper = styled.div`

`
const Brands = styled.div`
    height: min-content;
`
const Header = styled.div`

`
const Body = styled.div``
const Content = styled.div``
const Products = styled.div``