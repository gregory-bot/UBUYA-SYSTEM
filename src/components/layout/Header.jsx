import React from 'react';
import { Link } from 'react-router-dom';
import { Hotel, Menu, X, User, LogOut } from 'lucide-react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = React.useState(false);
  
  // Mock authenticated user - in a real app, this would come from auth context
  const user = { name: 'Chepkoech Carol', role: 'admin' };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Hotel className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-blue-600" style={{ fontFamily: 'Courier New, monospace' }}>Gadden-In</span>
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Home</Link>
              <Link to="/rooms" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Rooms</Link>
              <Link to="/reservations" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Reservations</Link>
              {user && user.role === 'admin' && (
                <>
                  <Link to="/admin/dashboard" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Dashboard</Link>
                  <Link to="/admin/inventory" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Inventory</Link>
                  <Link to="/admin/staff" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">Staff</Link>
                </>
              )}
            </nav>
          </div>
          
          <div className="hidden md:flex items-center">
            {user ? (
              <div className="ml-3 relative">
                <div>
                  <button
                    onClick={toggleUserMenu}
                    className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <span className="sr-only">Open user menu</span>
                    <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                      {user.name.charAt(0)}
                    </div>
                  </button>
                </div>
                
                {isUserMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="px-4 py-2 text-sm text-gray-700 border-b">
                      <p className="font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                    </div>
                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      Your Profile
                    </Link>
                    <button className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link to="/login">
                  <Button variant="outline">Log in</Button>
                </Link>
                <Link to="/register">
                  <Button>Sign up</Button>
                </Link>
              </div>
            )}
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Home</Link>
            <Link to="/rooms" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Rooms</Link>
            <Link to="/reservations" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Reservations</Link>
            {user && user.role === 'admin' && (
              <>
                <Link to="/admin/dashboard" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Dashboard</Link>
                <Link to="/admin/inventory" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Inventory</Link>
                <Link to="/admin/staff" className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50">Staff</Link>
              </>
            )}
          </div>
          
          {user ? (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    {user.name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">{user.name}</div>
                  <div className="text-sm font-medium text-gray-500 capitalize">{user.role}</div>
                </div>
              </div>
              <div className="mt-3 space-y-1">
                <Link to="/profile" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Your Profile
                </Link>
                <button className="w-full text-left block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center justify-around">
                <Link to="/login" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100">
                  Log in
                </Link>
                <Link to="/register" className="block px-4 py-2 text-base font-medium text-blue-600 hover:text-blue-800">
                  Sign up
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;