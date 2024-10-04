import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaDownload } from 'react-icons/fa';

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
  color: #000000; /* Black color */
  text-align: center;
  flex-direction: column;
  gap: 2em;
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px; /* Add padding to ensure content is not cut off */
  min-height: 100vh; /* Ensure the container takes full height */
`;

const Compare2 = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-orange-500 to-yellow-600 p-6">
        <h1 className="text-5xl font-extrabold text-black mb-8 animate-bounce">Download My Resume</h1>
        <a href="/resume.pdf" download className="bg-black text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-gray-800 transition duration-300 transform hover:scale-105">
          <FaDownload size={20} />
          <span>Download</span>
        </a>
      </div>
    </Container>
  );
};

export default Compare2;