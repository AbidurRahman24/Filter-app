import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderProton = ({ value, changePrice }) => {
    return (
        <>
            <Box sx={{ width: 300 }}>
      <Slider
        // aria-label="Temperature"
        value={value}
        onChange={changePrice}
        // getAriaValueText={valuetext}
        valueLabelDisplay="on"
        // marks
        min={1000}
        max={5000}
      />
    </Box>
        </>
    );
};

export default SliderProton;