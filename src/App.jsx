import { useState, useMemo } from 'react'
import './App.css'
import Routes from './Routes'
import UserInfoContext from './contexts/UserInfoContext'
import OrderInfoContext from './contexts/OrderInfoContext'

function App() {
    const [user, setUser] = useState({
        email: null,
        phone: null,
        name: null,
    })

    const [order, setOrder] = useState({
        quantity: null,
        price: null,
    })

    const valueUser = useMemo(() => ({ user, setUser }), [user])
    const valueOrder = useMemo(() => ({ order, setOrder }), [order])

    return (
        <UserInfoContext.Provider value={valueUser}>
            <OrderInfoContext.Provider value={valueOrder}>
                <div className="App">
                    <Routes />
                </div>
            </OrderInfoContext.Provider>
        </UserInfoContext.Provider>
    )
}

export default App
