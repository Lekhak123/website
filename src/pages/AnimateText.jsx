import React from 'react';
import TextTransition, { presets } from 'react-text-transition';
import styled from 'styled-components';

const preset_map = {
    gentle: presets.gentle,
    wobbly: presets.wobbly,
    stiff: presets.stiff,
    slow: presets.slow,
    molasses: presets.molasses,
};

const return_present = (present_type) => {
    if (!(present_type in preset_map)) {
        const keys = Object.keys(preset_map);
        present_type = keys[Math.floor(Math.random() * keys.length)];
    }
    return preset_map[present_type];
};

// Styled component for the text
const StyledText = styled.span`
    font-size: 3rem; /* Default font size */
    max-width: 100%; /* Ensure it doesn't overflow */
    white-space: normal; /* Allow text wrapping */
    overflow: visible; /* Show overflow text */
    text-overflow: clip; /* Show full text without ellipsis */

    @media (max-width: 768px) {
        font-size: 2.5rem; /* Adjust font size for tablets */
    }

    @media (max-width: 480px) {
        font-size: 2rem; /* Adjust font size for phones */
    }
`;

function AnimateText({ TEXTS, present_type, interval }) {
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        const intervalId = setInterval(() => setIndex((index) => index + 1), interval);
        return () => clearInterval(intervalId);
    }, [interval]);
    const preset_ = return_present(present_type);

    return (
        <StyledText>
            <TextTransition springConfig={preset_}>{TEXTS[index % TEXTS.length]}</TextTransition>
        </StyledText>
    );
}

export default AnimateText;