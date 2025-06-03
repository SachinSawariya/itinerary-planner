import React, { useState } from 'react';
import ItineraryList from './components/ItineraryList';
import MapView from './components/MapView';

const App = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="md:hidden fixed bottom-4 right-4 z-20">
        <button 
          onClick={() => setShowMap(!showMap)}
          className="bg-pink-700 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          aria-label="Toggle map view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
            <line x1="8" y1="2" x2="8" y2="18"></line>
            <line x1="16" y1="6" x2="16" y2="22"></line>
          </svg>
        </button>
      </div>

      <div className={`w-full md:w-1/2 lg:w-2/5 p-4 overflow-y-auto ${showMap ? 'hidden md:block' : 'block'}`}>
        <h1 className="text-2xl md:text-3xl font-bold text-pink-700 mb-4">Y2Z TRAVEL</h1>
        <ItineraryList />
      </div>

      <div className={`w-full h-[80vh] md:h-auto md:w-1/2 lg:w-3/5 ${!showMap ? 'hidden md:block' : 'block'}`}>
        <MapView />
      </div>
    </div>
  );
};

export default App;

