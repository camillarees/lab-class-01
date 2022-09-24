import React from 'react';
import './App.css';
// import HornedBeast from './HornedBeast.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import data from './data.json';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data,
      showModal: false,
      beastObj: {}
    }
  }

  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  handleShowModal = (beastTitle) => {
    this.setState({
      showModal: true,
      beastObj: beastTitle,
    });
  }
  render() {
    return (
      <>
        <div className="App">

          <Header />
        </div>
        <div>
          <SelectedBeast
            show={this.state.showModal}
            handleClose={this.handleCloseModal}
            beastObj={this.state.beastObj}
          />
        </div>
        <div>
          <Main data={data}
            handleShowModal={this.handleShowModal} />
        </div>
        <div>
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
