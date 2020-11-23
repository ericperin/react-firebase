import React from 'react';

import './App.css';

const App: React.FC = ({ children }) => (
  <div>
    {/* <Header />
    <SideBar /> */}
    <div>
      {children}
    </div>
    {/* <Footer />
    <Messages /> */}
  </div>
);

export default App;
