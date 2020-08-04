import React from 'react';

import { Categories, Sort, PizzaBlock } from '../components';

function Home({ items }) {
  return (

    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(name) => console.log(name)}
          items={[
            'Мясные',
            'Вегетерианские',
            'Гриль',
            'Острые',
            'Закрытые'
          ]} />
        <Sort items={[
          { name: 'популярность', type: 'popular' },
          { name: 'цена', type: 'proce' },
          { name: 'алфавит', type: 'alphabet' },
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((obj) => (<PizzaBlock key={obj} {...obj} />)

        )}
      </div>
    </div>
  );
}

export default Home;