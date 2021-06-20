import { createContext, useState } from 'react'
export const AdminAuthContext = createContext(null)

export function AdminContext ({children}) {
    const [admin, setAdmin] = useState()
    return (
        <AdminAuthContext.Provider value={{admin, setAdmin}}>
            {children}
        </AdminAuthContext.Provider>
    )
}