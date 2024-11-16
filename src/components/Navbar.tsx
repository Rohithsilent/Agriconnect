import React from 'react';
import { Menu, X, Tractor, Bell, MessageSquare, User } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems = [
    { label: 'Market Prices', value: 'market-prices' },
    { label: 'Marketplace', value: 'marketplace' },
    { label: 'News', value: 'news' },
    { label: 'Community', value: 'community' },
  ];

  return (
    <nav className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('dashboard')}>
            <Tractor className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">AgriConnect</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => onNavigate(item.value)}
                  className={`px-3 py-2 rounded-md ${
                    currentPage === item.value
                      ? 'bg-green-600'
                      : 'hover:bg-green-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="hover:bg-green-600 p-2 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="hover:bg-green-600 p-2 rounded-full">
              <MessageSquare className="h-5 w-5" />
            </button>
            <button className="hover:bg-green-600 p-2 rounded-full">
              <User className="h-5 w-5" />
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-green-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  currentPage === item.value
                    ? 'bg-green-600'
                    : 'hover:bg-green-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}