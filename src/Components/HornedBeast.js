import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class HornedBeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: 0;
        }
    }

handleClick = () => {
    this.setState({ clicked: this.state.clicked++}); 
};

render() {
    return (
        <Container>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.description}</Card.Text>
          <Card.Img>{this.props.imageUrl} alt={this.props.title} title={this.props.title}</Card.Img>
          onClick={this.handleClick}
          <Button variant="primary">Favorite</Button>
        </Card.Body>
      </Card>
      </Container>
    );
  };



function ContainerExample() {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;