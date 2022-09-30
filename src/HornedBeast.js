import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import './App.css';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    }
  };

  handleFavoriteClick = () => {
    this.setState({ clicked: this.state.clicked + 1 });
  };

  handleShowModal = () => {
    this.props.showModal(this.props.beastObj);
  }

  render() {
    return (
      <Container>
        <Card id="card" style={{ width: '16rem' }}>
          <Card.Body>
            <Card.Title id="cardTitle"> {this.props.title}</Card.Title>
            <Card.Img id="responsiveImage" variant="top" src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.handleShowModal} />
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.clicked}</Card.Text>
            <Button id="favoritesButton" onClick={this.handleFavoriteClick} variant="primary">Favorite</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  };
};






export default HornedBeast;