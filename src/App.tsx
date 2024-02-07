import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import NotfoundPage from './pages/NotfoundPage';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Customers from './pages/Customers';
import Reports from './pages/Reports';
import Coupons from './pages/Coupons';
import Inbox from './pages/Inbox';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/customers" element={<Customers />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/coupons" element={<Coupons />} />
                    <Route path="/inbox" element={<Inbox />} />
                    <Route path="*" element={<NotfoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;