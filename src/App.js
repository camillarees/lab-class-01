import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import SelectedBeast from './SelectedBeast.js';
import data from './data.json';
import Container from 'react-bootstrap/Container';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastObj: {},
// create a new array called allBeasts that carries the data from json
      allBeasts: data
    }
  }

// create function that passes new beasts array created in main
  filterBeastArray = filteredBeastsArray => {
// change the state allBeasts array to the filteredBeastsArray so it's no longer carrying data from json and can be altered
    this.setState({allBeasts: filteredBeastsArray})
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
        < Container className="container" >
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
              <div className="body">
                <Main
                // pass the state of the allBeasts array to Main
                  data={this.state.allBeasts}
                  handleShowModal={this.handleShowModal}
                  hornedBeasts={this.state.beastStats}
                  handleSelectedHorns={this.handleSelectedHorns}
                // pass the function that changes state to Main
                  filterBeastArray={this.filterBeastArray}
                   />
              </div>
              <div>
                <Footer />
              </div>
            </Container>
            );
    }
  }

            export default App;
