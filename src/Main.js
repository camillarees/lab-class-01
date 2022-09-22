import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';


class Main extends React.Component {
    render() {
        return (
            <>
{data.map( beastObj => (

    <HornedBeast
    title={beastObj.title}
    imageUrl={beastObj.image_url}
    description={beastObj.description} />

    ))};
            </>
        );
    };
};

export default Main;