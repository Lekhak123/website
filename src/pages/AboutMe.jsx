import React from 'react';
import styled, { keyframes } from 'styled-components';

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
  text-align: center;
  flex-direction: column;
  gap: 2em;
  animation: ${fadeIn} 1s ease-in-out;
  padding: 20px;
  min-height: 100vh;
`;

// Adjust chat bubble size
const ChatBubble = styled.div`
  .chat-bubble {
    padding: 1rem 2rem; /* Double the padding */
    font-size: 1.75rem; /* Increase font size */
    min-height: 3rem;   /* Increase minimum height */
    border-radius: 1rem; /* Slightly rounder edges to match the size */
  }

  .w-10 {
    width: 4rem; /* Double the avatar size */
    height: 4rem;
  }
`;

// Responsive name heading styling
const NameHeading = styled.h1`
  font-size: 2rem; /* Base font size for small screens */
  font-weight: bold;
  color: #4A5568; /* Gray color */
  line-height: 1.2;

  @media (min-width: 640px) { /* Small screens and up */
    font-size: 2.5rem;
  }

  @media (min-width: 768px) { /* Medium screens and up */
    font-size: 4rem;
  }

  @media (min-width: 1024px) { /* Large screens and up */
    font-size: 5rem;
  }
`;

const AboutMe = () => {
  return (
    <Container>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <header className="mb-6">
          <NameHeading>
            Hridayesh <span className="block sm:inline">Lekhak</span>
          </NameHeading>
        </header>

        <ChatBubble>
          {/* Chat bubbles to introduce yourself */}
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://media.discordapp.net/attachments/1148037983694499910/1291588918273376418/1720935474435.png?ex=6700a56a&is=66ff53ea&hm=54ea5d0188a09b3bbe162fb6c95d0744dfd57499365f54fe203df8eb069981fa&=&format=webp&quality=lossless&width=437&height=437"
                />
              </div>
            </div>
            <div className="chat-bubble">
              I'm a sophomore at the University of Texas at Arlington.
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://media.discordapp.net/attachments/1148037983694499910/1291588918273376418/1720935474435.png?ex=6700a56a&is=66ff53ea&hm=54ea5d0188a09b3bbe162fb6c95d0744dfd57499365f54fe203df8eb069981fa&=&format=webp&quality=lossless&width=437&height=437"
                />
              </div>
            </div>
            <div className="chat-bubble">
              I currently work as a web developer for my CSE department.
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Avatar"
                  src="https://media.discordapp.net/attachments/1148037983694499910/1291588918273376418/1720935474435.png?ex=6700a56a&is=66ff53ea&hm=54ea5d0188a09b3bbe162fb6c95d0744dfd57499365f54fe203df8eb069981fa&=&format=webp&quality=lossless&width=437&height=437"
                />
              </div>
            </div>
            <div className="chat-bubble">
              I'm also part of the ACL group, researching animal language processing with Dr. Kenny Zhu.
            </div>
          </div>
        </ChatBubble>
      </div>
    </Container>
  );
};

export default AboutMe;
