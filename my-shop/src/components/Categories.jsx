import React from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectIetm = (index) => {
    setActiveItem(index)
  }
  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active ' : ''} onClick={() => onSelectIetm(null)} >Все </li>
        {items &&
          items.map((name, index) => (
            <li className={activeItem === index ? 'active ' : ''} onClick={() => onSelectIetm(index)} key={`${name}_${index}`}>{name}</li>
          ))
        }
      </ul>
    </div>);
}

export default Categories;