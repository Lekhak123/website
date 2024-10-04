import React, { useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

import Compare1 from './Compare1';
import Compare2 from './Compare2';

function About() {


    return (
        <ReactCompareSlider onlyHandleDraggable={true}
        itemOne={<Compare1/>}
        itemTwo={<Compare2/>}
      />
    );
}

export default About;
