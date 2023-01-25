import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const FilterListToggle = ({ options, value, selectToggle }) => {

    return (
      <ToggleButtonGroup
      color="primary"
      value={value}
      exclusive
      onChange={selectToggle}
      aria-label="Platform"
    >
      {options.map(({ label, id, value }) => (
        <ToggleButton  key={id} value={value}>
          {label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
    );
};

export default FilterListToggle;