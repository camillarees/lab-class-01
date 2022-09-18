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


// The Main component needs to render at least two copies of a component called HornedBeast.

// The Main component needs to pass title, imageUrl, and description into each HornedBeast component. For the purpose of today’s lab, you can pass whatever title, url and description that you want into each HornedBeast commponent.

// The HornedBeast component needs to contain an <h2> that displays the title of the animal, an <img> element with src, alt and title attributes, and a <p> that displays the description.

