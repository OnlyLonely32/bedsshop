import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Categories, Sort, PizzaBlock, PizzaLoadingBlock } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";


const categoriesNames = [
  'Мясные',
  'Вегетерианские',
  'Гриль',
  'Острые',
  'Закрытые'
];

const sortItems = [
  { name: 'популярность', type: 'popular', order: 'desc' },
  { name: 'цена', type: 'price', order: 'desc' },
  { name: 'алфавит', type: 'name', order: 'asc' },
];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const cartItems = useSelector(({ cart }) => cart.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  const handleAddPizzaToCard = (obj) => {
    dispatch(addPizzaToCart(obj));

  }

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, [])

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, [])

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoriesNames} />
        <Sort
          activeSortType={sortBy.type}
          items={sortItems}
          onClickSortType={onSelectSortBy}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded ? items.map((obj, index) => (
          <PizzaBlock
            onClickAddPizza={handleAddPizzaToCard}
            key={`${obj}_${index}`}
            isLoading={true}
            addedPizzas={cartItems[obj.id] && cartItems[obj.id].items.length}
            {...obj}
          />)) : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;