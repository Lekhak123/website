
import ImpressComponent from './pages/ImpressComponent';



import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles to set the background color for the entire app
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #556B2F; /* Dark Olive Green */
  }
`;

// Main App component
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Ensure the container takes full height */
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
      <ImpressComponent/>
      </AppContainer>
    </>
  );
};

export default App;
