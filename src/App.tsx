import React, { useState } from 'react';
import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import MarketPricesPage from './pages/MarketPricesPage';
import MarketplacePage from './pages/MarketplacePage';
import NewsPage from './pages/NewsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      {currentPage === 'dashboard' && <DashboardPage />}
      {currentPage === 'market-prices' && <MarketPricesPage />}
      {currentPage === 'marketplace' && <MarketplacePage />}
      {currentPage === 'news' && <NewsPage />}
    </div>
  );
}

export default App;