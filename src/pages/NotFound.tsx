import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-9xl font-bold text-[#E8C694] mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#3A3A3A] mb-6">Page Not Found</h2>
        <p className="text-gray-600 max-w-lg mx-auto mb-8">
          We're sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 bg-[#3A3A3A] text-white font-medium rounded-md hover:bg-[#E8C694] transition-colors flex items-center"
          >
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 border border-[#3A3A3A] text-[#3A3A3A] font-medium rounded-md hover:bg-gray-100 transition-colors flex items-center"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;