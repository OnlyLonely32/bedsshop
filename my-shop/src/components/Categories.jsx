import React from 'react';
import PropTypes from 'prop-types';

const Categories = React.memo(
  function Categories({ activeCategory, onClickItem, items }) {
    return (
      <div className="categories">
        <ul>
          <li className={activeCategory === null ? 'active ' : ''} onClick={() => onClickItem(null)} >Все </li>
          {items &&
            items.map((name, index) => (
              <li className={activeCategory === index ? 'active ' : ''}
                onClick={() => onClickItem(index)}
                key={`${name}_${index}`}>
                {name}
              </li>
            ))
          }
        </ul>
      </div>);
  }
);

Categories.propTypes = {
  // activeCategory: PropTypes.oneOf([PropTypes.number, null]).isRequired,
  onClickItem: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,


}

Categories.defaultProps = {
  activeCategory: null,
  items: [],
}

export default Categories;