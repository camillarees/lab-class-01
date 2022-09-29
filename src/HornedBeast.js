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
          <Card style={{ width: '16rem'}}>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.clicked}</Card.Text>
            <Card.Img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} onClick={this.handleShowModal}/>
            <Button id="favoritesButton" onClick={this.handleFavoriteClick} variant="primary">Favorite</Button>
          </Card.Body>
        </Card>
      </Container>
    );
  };
};


    



export default HornedBeast;