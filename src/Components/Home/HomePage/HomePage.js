import React from 'react';
import NavBar from '../../Shared/NavBar/NavBar';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Tutor from '../Tutor/Tutor';

const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <FeaturedService></FeaturedService>
            <Tutor></Tutor>
            <Review></Review>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;