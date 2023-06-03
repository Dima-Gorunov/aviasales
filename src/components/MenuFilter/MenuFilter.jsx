import React from 'react';

const MenuFilter = (props) => {
  const setActiveMenuItem = (e) => {
    const key = e.currentTarget.value;
    props.setSimpleFilter(key);
  };
  return (
    <div className="menu-filter-container">
      <div className="menu-filter-items-container">
        {props.SimpleFilter.map((item, index) => (
          <button
            key={`${index}menuitem`}
            className={`menu-filter-item${item.active ? '__active' : ''}`}
            onClick={(e) => setActiveMenuItem(e)}
            value={item.key}
          >
            {item.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuFilter;
