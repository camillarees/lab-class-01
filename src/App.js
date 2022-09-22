import React from 'react';
import './App.css';

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
