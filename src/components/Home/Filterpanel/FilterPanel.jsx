import React from 'react';
import { categoryList, ratingList } from '../../../data/Data';
import CheckboxProton from '../../common/CheckboxProton';
import FilterListToggle from '../../common/FilterListToggle';
import SliderProton from '../../common/SliderProton/SliderProton';
import './styles.css'

const FilterPanel = ({
  selectedCategory,
  selectCategory,
  selectedRating,
  selectedPrice,
  selectRating,
  cuisines,
  changeChecked,
  changePrice,
}) => {
  return (
    <div>
      {/* catagory */}
      <div className='input-group'>
        <p className='label'>Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectCategory}
        />
      </div>
      {/* curines */}
      <div className='input-group'>
      <p className='label'>Cuisine</p>
      {cuisines.map((cuisine) => (
        <CheckboxProton
          key={cuisine.id}
          cuisine={cuisine}
          changeChecked={changeChecked}
        />
      ))}
    </div>
      {/* pricing */}
      <div className='input-group'>
      <p className='label-range'>Price Range</p>
      <SliderProton value={selectedPrice} changePrice={changePrice} />
    </div>
      {/* STAR */}
      <div className='input-group'>
      <p className='label'>Star Rating</p>
      <FilterListToggle
        options={ratingList}
        value={selectedRating}
        selectToggle={selectRating}
      />
    </div>
    </div>
  );
};

export default FilterPanel;