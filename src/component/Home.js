import React from 'react';
import HomePageImage from '../component/HomePageImage';
import NavBar from'../component/NavBar';


const Home = () => {



    return (
        <div>
            <NavBar />
            <br></br>
            <HomePageImage />
            <h1 className="mt-5">React Testing Application Website</h1>
        </div>

    );

}

export default Home;