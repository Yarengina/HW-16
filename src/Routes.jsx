import { Routes as ReactRoutes, Route } from 'react-router-dom'
import LoginPass from './pages/LoginPass/LoginPass'
import Order from './pages/Order/Order'
import Page404 from './pages/Page404/Page404'
import About from './pages/About/About'
import BookDesc from './pages/BookDesc/BookDesc'
import OrderReady from './pages/OrderReady/OrderReady'
import UserOrder from './pages/UserOrder/UserOrder'

function Routes() {
    return (
        <div>
            <ReactRoutes>
                <Route path="/" element={<LoginPass />} />
                <Route path="/about" element={<About />} />
                <Route path="/order" element={<Order />} />
                <Route path="/order/:bookId" element={<BookDesc />} />
                <Route path="/order/user_order" element={<UserOrder />} />
                <Route path="/order/receipt" element={<OrderReady />} />
                <Route path="*" element={<Page404 />} />
            </ReactRoutes>
        </div>
    )
}

export default Routes
