import React from 'react';
import HornedBeast from './HornedBeast';
import { CardDeck } from 'react-bootstrap'
import data from '../data.json';


class Main extends React.Component {
    render() {
        return (
<>
<CardDeck>
<HornedBeast>
        title={data[0].title}
        imageUrl={data[0].img_url}
        description={data[0].description}</HornedBeast>
        );
    };
};

</>

export default Main;