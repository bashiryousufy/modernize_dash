import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import NotfoundPage from './pages/NotfoundPage';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="*" element={<NotfoundPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;