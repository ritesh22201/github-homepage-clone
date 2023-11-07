import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../Assets/github-logo.svg';
import { AiOutlineDown, AiOutlineRight } from 'react-icons/ai';
import section1Img1 from '../Assets/section1Img1.webp';
import {BsSearch} from 'react-icons/bs';
import section1Img2 from '../Assets/section1Img2.png';
import section1Img3 from '../Assets/sectionImg3.webp';
import Section1 from '../Components/Section1';
import Section2 from '../Components/Section2';
import Section3 from '../Components/Section3';
import Section4 from '../Components/Section4';
import Section5 from '../Components/Section5';
import Section6 from '../Components/Section6';
import Footer from '../Components/Footer';

const Home = () => {
    return (
        <main>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Footer/>
        </main>
    )
}

export default Home;