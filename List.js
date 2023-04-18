
import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';

// Single List Item
const WrappedSingleListItem = ({
  index,
  isSelected,
  onClickHandler,
  text,
}) => {
  return (
    <li
      style={{ backgroundColor: isSelected ? 'green' : 'red'}}
      onClick={()=>onClickHandler(index)}//Instead of passing {onClickHandler(index)} we pass a function that calls the onClickHandler with the index as an argument
      // onClick={onClickHandler(index)}//This will call the onClickHandler with the index as an argument on every render
    >
      {text}
    </li>
  );
};

WrappedSingleListItem.propTypes = {
  index: PropTypes.number,
  isSelected: PropTypes.bool,
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

const SingleListItem = memo(WrappedSingleListItem);

// List Component
const WrappedListComponent = ({
  items,
}) => {
  const [selectedIndex,setSelectedIndex] = useState(null);//This is the state that will hold the index of the selected item
  //instead of [setSelectedIndex,selectedIndex] we can use [selectedIndex,setSelectedIndex]

  useEffect(() => {
    setSelectedIndex(null);//we pass null to setSelectedIndex to reset the state on every render
  }, [items]);

  const handleClick = index => {
    setSelectedIndex(index);
  };

  return (
    <ul style={{ textAlign: 'left' }}>
      {items.map((item, index) => (
        <SingleListItem
            key={index}//We pass the index as the key prop
            index={index}
            isSelected={index === selectedIndex}//We pass the index of the selected item to the isSelected prop
            //=== is the strict equality operator
            //index === selectedIndex will return true if the index of the selected item is equal to the index of the current item
            //index !== selectedIndex will return true if the index of the selected item is not equal to the index of the current item

            onClickHandler={handleClick}
            text={item.text}
        />
      ))}
    </ul>
  )
};

WrappedListComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })),
};

WrappedListComponent.defaultProps = {
  items: [
    {
        text: 'item1',
    },
    {
        text: 'item2',
    },
    {
        text: 'item3',
    },
    {
        text: 'item4',
    },
  ],//This is the default value of the items prop
  //Instead of null we can pass an empty array [] also
};

const List = memo(WrappedListComponent);//This simple List component will re-render on every render of the parent component
//We can use memo to prevent the re-rendering of the List component on every render of the parent component
//we can pass props to List or else it uses the default props

export default List;

