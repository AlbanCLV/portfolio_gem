
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-medium">
        <p>&copy; {new Date().getFullYear()} Alban Calvo. All Rights Reserved.</p>
        <p className="text-sm mt-1">Designed & Built with ❤️ and React</p>
      </div>
    </footer>
  );
};

export default Footer;
