import React from 'react';
import HornedBeast from './HornedBeast';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import data from './data.json';
import Row from 'react-bootstrap/Row';

class Main extends React.Component {

    // create function that handles the events of a selection from the dropdown form
    handleSelectedHorns =  event => {
        const hornsSelected = event.target.value;
    // create changeable array which state can updated when passed through from App.js props
        let filteredBeastsArray;
    
        if (hornsSelected === "Any") {
          this.setState({ allBeasts: data});
          } else if (hornsSelected === "1") {
            filteredBeastsArray = data.filter(beast => beast.horns === 1);
            // alter filtered beast array state through props from function in App.js
            this.props.filterBeastArray(filteredBeastsArray)
          } else if (hornsSelected === "2") {
            filteredBeastsArray = data.filter(beast => beast.horns === 2);
            this.props.filterBeastArray(filteredBeastsArray)
        } else if (hornsSelected === "3") {
          filteredBeastsArray = data.filter(beast => beast.horns === 3);
          this.props.filterBeastArray(filteredBeastsArray)
        }  else if (hornsSelected === "100") {
          filteredBeastsArray = data.filter(beast => beast.horns === 100);
          this.props.filterBeastArray(filteredBeastsArray)
    
        };
        console.log(filteredBeastsArray);
      };

    render() {
        return (
            <>
            <Container>
                <Form>
                    <Form.Group className="formGroup" >
                        <Form.Label id="formLabel" >Filter by number of horns</Form.Label>
                        <Form.Control
                            as="select"
                            onChange={this.handleSelectedHorns}>
                        <option value="Any">Any</option>
                            <option value="1">1</option>
                                <option value="2">2</option>
                                    <option value="3">3</option>
                                        <option value="100">100</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Form>
                            </Container>
                            <Container className="Main">
                            <Row xs={1} sm={2} md={3} lg={4} className="cardGrid">
                                {this.props.data.map(beastObj => (
                                    <HornedBeast
                                        title={beastObj.title}
                                        imageUrl={beastObj.image_url}
                                        description={beastObj.description}
                                        showModal={this.props.handleShowModal}
                                        beastObj={beastObj} />
                                ))}
                                </Row>
                                
                            </Container>
                            </>
                            )
    }
};

                            export default Main;