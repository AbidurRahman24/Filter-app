import { useEffect, useState } from 'react';
import EmptyView from '../../components/common/EmptyView/EmptyView';
import FilterPanel from '../../components/Home/Filterpanel/FilterPanel';
import List from '../../components/Home/List/List';
import SearchBar from '../../components/Home/SearchBar/SearchBar';
import { dataList } from '../../data/Data';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './styles.css';

const Index = () => {
  // contact variable
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [resultFound, setResultFound] = useState(true)
  const [list, setList] = useState(dataList);
  const [searchInput, setSearchInput] = useState('');
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: 'American' },
    { id: 2, checked: false, label: 'Chinese' },
    { id: 3, checked: false, label: 'Italian' },
  ]);

  // handle function
  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value)
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };


  // functionality
  const applyFilters = () => {
    let updatedList = dataList

    // rating filters
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }
    // cuisine
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisinesChecked.includes(item.cuisine)
      );
    }

    // price
    const minPrice = selectedPrice[0]
    const maxPrice = selectedPrice[1]

    updatedList = updatedList.filter((item) => item.price >= minPrice && item.price <= maxPrice)

    // search input
    if (searchInput) {
      updatedList = updatedList.filter((item) => item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1)
    }

    !updatedList.length ? setResultFound(false) : setResultFound(true)
    setList(updatedList);
  }
  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, searchInput]);
  return (
    <>
      {/* search bar component */}
      <div>
        <SearchBar value={searchInput} changeInput={(e) => setSearchInput(e.target.value)} />
      </div>
      <Container fluid >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div>
            <FilterPanel
          selectedCategory={selectedCategory}
          selectCategory={handleSelectCategory}
          selectedRating={selectedRating}
          selectRating={handleSelectRating}
          cuisines={cuisines}
          changeChecked={handleChangeChecked}
          changePrice={handleChangePrice}
          selectedPrice={selectedPrice}

        />
            </div>
          </Grid>
          <Grid item xs={8}>
            <div>{resultFound ? <List list={list} /> : <EmptyView />}</div>
          </Grid>
        </Grid>
      </Box>
      </Container>

      
    </>
  );
};

export default Index;