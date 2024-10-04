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
            x: 2825,
            y: 2325,
            z: -3000,
            rotateZ: 300,
            scale: 1
        },
        content: [
            <p>and <b>tiny</b> ideas</p>
        ]
    },
    {
        id: "ing",
        data: {
            x: 3500,
            y: -850,
            rotateZ: 270,
            scale: 6
        },
        content: [
            <p>by <b className="positioning">positioning</b>, <b className="rotating">rotating</b> and <b className="scaling">scaling</b> them on an infinite canvas</p>
        ]
    },
    {
        id: "imagination",
        data: {
            x: 6700,
            y: -300,
            scale: 6
        },
        content: [
            <p>the only <b>limit</b> is your <b className="imagination scaling-up">imagination</b></p>
        ]
    },

    {
        id: "one-more-thing",
        data: {
            x: 6000,
            y: 4000,
            scale: 2
        },
        content: [
            <p>one more thing...</p>
        ]
    },
    {
        id: "its-in-3d",
        data: {
            x: 6200,
            y: 4300,
            z: -100,
            rotateX: -40,
            rotateY: 10,
            scale: 2
        },
        content: [
            <p><span className="have">have</span> <span className="you">you</span> <span className="noticed">noticed</span> <span className="its">it’s</span> <span className="in">in</span> <b>3D<sup>*</sup></b>?</p>,
            <span className="footnote">* beat that, prezi ;)</span>
        ]
    },
    {
        id: "by-react-impressjs",
        data: {
            x: 3000,
            y: 6000,
            z: 4000,
            rotateX: -70,
            rotateY: 30,
            scale: 10
        },
        content: [
            <p>This demo of impress.js is made via <a href="https://github.com/GeorgioWan/react-impressjs" target="_blank">React-impressJS</a></p>
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