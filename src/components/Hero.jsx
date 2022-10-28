//user === undefined (falsey) ✓
//!user === truthy ✓
//!!user === false (boolean)
//!!!user === true (boolean)





import {useState, } from 'react'

function Hero() {
    const [user, setUser] = useState()
    console.log({user})
    const handleLogin = () => {
        setUser({ firstName: 'Cari', email: 'Carilicor@gmail.com', admin: false })
    }
    const handleLogout = () => {
        setUser()
    }
    if(!user) { //if no user 
        return <button onClick={handleLogin}>Login</button>
    }
    return (
        <>
        <h1>Hello {user.firstName}</h1>
        <button onClick={handleLogout}>Log out</button>
        </>
    )
}

export default Hero