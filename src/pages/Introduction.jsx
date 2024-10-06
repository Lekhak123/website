import React from 'react';
import styled, { keyframes } from 'styled-components';
import AnimateText from './AnimateText';

// Define keyframes for the animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled component for the container
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #61dafb; /* React blue color */
  text-align: center;
  flex-direction: column;
  gap: 2em;
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px; /* Add padding to ensure content is not cut off */
  min-height: 100vh; /* Ensure the container takes full height */
`;

// Styled component for animated text
const AnimatedText = styled.h1`
  font-size: 2rem; /* Smaller font size */
  margin: 0;
  animation: ${fadeIn} 1.5s ease-in-out forwards;
  &:hover {
    color: #21a1f1; /* Change color on hover */
    transition: color 0.3s ease;
  }
`;

const SameRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff7e5f, #feb47b); /* Gradient background */
  color: #fff; /* White text color */
  text-align: center;
  flex-direction: row;
  animation: ${fadeIn} 1s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); /* Shadow effect */
  border-radius: 10px; /* Rounded corners */
  padding: 10px 20px; /* Padding for better spacing */
  font-size: 1.5rem; /* Default font size */
  width: 80%; /* Default width */
  height: 90px; /* Default height */

  @media (max-width: 768px) {
    font-size: 1.25rem; /* Adjust font size for tablets */
    width: 90%; /* Adjust width for tablets */
  }

  @media (max-width: 480px) {
    font-size: 1rem; /* Adjust font size for phones */
    width: 100%; /* Adjust width for phones */
    padding: 15px; /* Adjust padding for phones */
  }
`;

const FancyName = styled.span`
  background: linear-gradient(135deg, #ff7e5f, #feb47b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: 'Pacifico', cursive; /* Use a fancy font */
  font-size: 1.5em; /* Smaller font size */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Add shadow for depth */
  line-height: 1.2; /* Adjust line height */
  padding-bottom: 5px; /* Add padding to ensure the bottom part is visible */
`;

const Introduction = () => {
  return (
    <Container>
   <div className="avatar">
  <div className="w-28 rounded-full">
    <img src="/1720935474435.png" alt=" of me" />
  </div>
</div>


      <AnimatedText>
        Hello! I am
      </AnimatedText>
      <FancyName>Hridayesh Lekhak</FancyName>
      <SameRow>
        <AnimateText
          TEXTS={[
            ' Full Stack Developer',
            ' Web Developer',
            ' CS Student',

          ]}
          present_type="random"
          interval={4000}
        />
      </SameRow>
    </Container>
  );
};

export default Introduction;