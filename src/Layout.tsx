import { ReactNode } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <main className="p-4 sm:ml-56 mt-12">
                    {children}
                </main>
            </div>
        </>
    );
}

export default Layout;