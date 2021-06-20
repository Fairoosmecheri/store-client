import React from 'react'

function AdminLogin() {
    return (
        <div className='flex justify-center  pt-24'>
            
            <form className='w-1/3 shadow-xl p-5 rounded-xl mt-5 flex flex-col '>
            <h1 className='text-center uppercase font-bold mb-4'>Admin Login</h1>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter your email address" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                
                <button className='bg-blue-500 px-3 py-1 mx-auto text-white rounded-lg shadow-xl hover:bg-blue-600 w-32 mt-3 focus:outline-none'>Login</button>
            </form>
        </div>
    )
}

export default AdminLogin
