import { ReactNode } from 'react';
import Header from './components/ui/Header';
import Sidebar from './components/ui/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="p-4">
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;