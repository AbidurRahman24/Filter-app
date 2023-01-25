import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const CheckboxProton = ({ changeChecked, cuisine }) => {
  const { checked, label, id } = cuisine;
  return (
    <div>
      <FormControlLabel
            control={
              <Checkbox checked={checked}
              onChange={() => changeChecked(id)} name="gilad" />
            }
            label={label}
          />
    </div>
  )
}

export default CheckboxProton