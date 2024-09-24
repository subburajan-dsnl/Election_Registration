import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/LoginPage';
import BookingForm from './components/Form/BookingForm';
import ThankYou from './components/Form/ThankYou';

const App: React.FC = () => {
  return (
    <>
    <div className="flex flex-col min-h-screen">

    <main className="flex-grow">
  
  
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/booking" element={<BookingForm />} />
        <Route path='/thankyou' element={<ThankYou />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    </main>
    <footer className="relative w-full bg-gray-800 text-white py-6 bottom-0">
    <div className='flex  justify-center items-center -mt-2'>
     
    Powered by <a href="https://dsnl.co.in" className="ml-1">DSNL</a>
     

    </div>
  <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center ">
    
    <div className="flex space-x-6 mb-4 md:mb-0">
      <a href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</a>
      <a href="/terms-of-service" className="hover:text-gray-300">Terms of Service</a>
      <a href="/copyright" className="hover:text-gray-300">Copyright</a>
    </div>
    <div className="text-sm text-center md:text-right">
      &copy; 2024 DSNL. All Rights Reserved
    </div>
  </div>
</footer>
    </div>

    </>
  );
};

export default App;
