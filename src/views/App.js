import React from 'react';
import 'assets/app.scss';

import Header from 'components/Header';
import Home from 'components/Home';
import About from 'components/About';
import Sculptures from 'components/Sculptures';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Sculptures />
    </div>
  );
}

export default App;
