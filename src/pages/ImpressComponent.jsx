import React from 'react';
import {Impress, Step} from 'react-impressjs';

import 'react-impressjs/styles/react-impressjs.css';

import Introduction from './Introduction';
import About from './About';
import AboutMe from './AboutMe';

import BigText from './BigText';
import Timeline from './Timeline';


import styled from 'styled-components';

const TestContainer = styled.div`
  display: flex;              
  justify-content: center;     
  align-items: center;         
  width: 100%;                 
  height: 100vh;               
  max-height: 100%;            /* Maximum height constraint */
  padding: 20px;               
  box-sizing: border-box;      
  background-color: #282c34;  
  color: #fff;                 
    overflow: hidden; /* Hide overflow text */

`;


const slides = [
    {
        id: "introduction",
        className: "slide",
        data: {
            x: -1000,
            y: -1500
        },
        content: [
            <TestContainer>
                <Introduction/>
            </TestContainer>
        ]
    },
    {
        className: "about",
        data: {
            y: -1500
        },
        content: [
                <About/>
        ]
    },

    {
        id: "its",
        data: {
            x: 850,
            y: 3000,
            rotateZ: 90,
            scale: 5
        },
        content: [
            <AboutMe/>
        ]
    },
    {
        id: "big",
        data: {
            x: 4700,
            y: 2500,
            rotateZ: 180,
            scale: 6
        },
        content: [
            <BigText/>
        ]
    },
    {
        id: "tiny",
        data: {
            x:2825,
            y:2325,
            z:-3000,
            rotateZ:300,
            scale:1
        },
        content: [
            <Timeline/>
        ]
    },{
        id: "imagination",
        data: {
            x: 8700,
            y: -300,
            scale: 6
        },
        content: [
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-relaxed text-center p-4 bg-gradient-to-r from-purple-800 via-indigo-800 to-blue-800 text-white rounded-lg shadow-lg">
                I like{' '}
                <b className="text-blue-300 font-semibold hover:underline transition duration-300 transform hover:scale-110">hiking</b>,{' '}
                <b className="text-green-300 font-semibold hover:underline transition duration-300 transform hover:scale-110">cooking</b>{' '}
                <b className="text-purple-300 font-semibold hover:underline transition duration-300 transform hover:scale-110">anime/manga</b> and{' '}
                <span className="inline-block mt-4"> {/* Add margin-top for spacing */}
                    <b className="imagination scaling-up text-red-300 font-semibold hover:underline transition duration-300 transform hover:scale-110 ml-2">machine</b>
                    <br /> {/* Line break for vertical gap */}
                    <b className="imagination scaling-up text-red-300 font-semibold hover:underline transition duration-300 transform hover:scale-110">learning</b>
                </span>
            </p>
        ]
        
    },

    {
        id: "one-more-thing",
        data: {
            x: 9000,
            y: 4000,
            scale: 2
        },
        content: [
            <p>One more thing...</p>
        ]
    },
    {
        id: "its-in-3d",
        data: {
            x: 10200,
            y: 4300,
            z: -100,
            rotateX: -40,
            rotateY: 10,
            scale: 2
        },
        content: [
            <p><span className="have">have</span> <span className="you">a</span> <span className="noticed">great</span> day </p>,
        ]
    }
  ];

function ImpressComponent() {
    return (
        <Impress
            fallbackMessage={< p > Sorry,
        your <b> device or browser </b> couldn't support well.</p >}>

            {slides.map((slide, index) => (
                <Step
                    key={slide.id+ index}
                    id={slide.id}
                    className={slide.className}
                    data={slide.data}>
                    {slide.content}
                </Step>
            ))}

        </Impress>
    );
}

export default ImpressComponent;