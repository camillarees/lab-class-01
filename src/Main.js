import React from 'react';
import HornedBeast from './HornedBeast';
// import SelectedBeast from './SelectedBeast';
import Container from 'react-bootstrap/Container';

class Main extends React.Component {
    render() {
        return (
            <Container className="Main">
                {this.props.data.map(beastObj => (
                    <><HornedBeast
                        title={beastObj.title}
                        imageUrl={beastObj.image_url}
                        description={beastObj.description}
                        showModal={this.props.handleShowModal}
                        beastObj={beastObj} />
                        {/* <SelectedBeast
                
                beast={beastObj}
                /> */}
                    </>
                ))}

            </Container>
        )
    }
};

export default Main;