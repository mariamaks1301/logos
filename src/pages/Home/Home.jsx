import React from 'react';
import About from './About/About';
import AllProducts from './AllProducts/AllProducts';
import Begin from './Begin/Begin';
import Map from './Map/Map';

const Home = () => {
    return (
        <main>
           <Begin/>
           <AllProducts/>
           <About/>
           <Map/>
        </main>
    );
};

export default Home;