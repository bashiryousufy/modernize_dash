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
import KnowledgeBase from './pages/OtherInformation/KnowledgeBase';
import ProductUpdates from './pages/OtherInformation/ProductUpdates';
import PersonalSettings from './pages/Settings/PersonalSettings';
import GlobalSettings from './pages/Settings/GlobalSettings';

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
                    <Route path="/knowledge-base" element={<KnowledgeBase />} />
                    <Route path="/product-updates" element={<ProductUpdates />} />
                    <Route path="/personal-settings" element={<PersonalSettings />} />
                    <Route path="/global-settings" element={<GlobalSettings />} />
                    <Route path="*" element={<NotfoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;