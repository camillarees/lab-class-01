import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App extends React.Component {
  render() {
  return (
    <>
   <div className="App">
   <Header />
   </div>
   <div>
    <Main/>
    </div>
   <div>
    <Footer />
    </div>
    </>
  );
}
}

export default App;
