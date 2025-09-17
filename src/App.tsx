import React from 'react';
import TopNav from './components/TopNav';
import LeftNav from './components/LeftNav';

const App: React.FC = () => (
    <div>
        <TopNav />
        <div style={{ display: 'flex' }}>
            <LeftNav />
            <main style={{ flex: 1, padding: '2rem' }}>
                {/* ...existing code... */}
            </main>
        </div>
    </div>
);

export default App;