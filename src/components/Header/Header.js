import React from 'react';
import HeaderNavbar from '../Navbar/Navbar';
import Slider from '../Slider/Slider';

const Header = (props) => {
    const news = props.news;
    return (
        <div>
            <HeaderNavbar></HeaderNavbar>
            <Slider news={news}></Slider>
        </div>
    );
};

export default Header;