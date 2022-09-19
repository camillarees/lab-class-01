import React from 'react';
import HornedBeast from './Beast';

class Main extends React.Component {
    render() {
        return (
<>
< HornedBeast
        title={'Animal'}
        imageUrl={'https://unsplash.com/photos/brFsZ7qszSY'}
        description={'dog'}/>
<HornedBeast
        title={'Animal2'}
        imageUrl={'https://unsplash.com/photos/NE0XGVKTmcA'}
        description={'dog 2'}/>
</>
        );
    }
}

export default Main;