import React from 'react';

// eslint-disable-next-line react/prop-types
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
