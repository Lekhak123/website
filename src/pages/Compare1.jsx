import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';

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

const Compare1 = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
        <h1 className="text-5xl font-extrabold text-white mb-8 animate-bounce">Connect with me</h1>
        <div className="flex space-x-8">
          <a href="https://github.com/Lekhak123" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <FaGithub size={50} />
          </a>
          <a href="https://www.linkedin.com/in/hridayeshlekhak/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <FaLinkedin size={50} />
          </a>
          <a href="https://discordapp.com/users/961414521279348807" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <FaDiscord size={50} />
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Compare1;