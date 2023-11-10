import React from 'react';
import { filterFact } from '../../constant/filter-facts';
import './style.css';

export const FilterSelect = ({
  data,
  setFilterArray,
  setReNameClass,
  reNameClass,
}) => {
  const show = (value) => {
    document.querySelector('.textBox').value = value;
    setReNameClass(!reNameClass);
    filterFacts(value);
  };

  const filterFacts = (filterValue) => {
    setReNameClass(!reNameClass);
    const newArr = JSON.parse(JSON.stringify(data));

    switch (filterValue) {
      case 'Verify':
        setFilterArray(newArr.filter((el) => el.status.verified === true));
        break;
      case 'Creation month':
        setFilterArray(
          newArr.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1) || 0)
        );
        break;
      case 'Animal type':
        setFilterArray(
          newArr.sort((a, b) => (a.createdAt > b.createdAt ? 1 : -1) || 0)
        );
        break;
      case 'Source':
        setFilterArray(
          newArr
            .filter((el) => el.source !== undefined)
            .sort((a, b) => (a.source > b.source ? 1 : -1) || 0)
        );
        break;
      default:
        document.querySelector('.textBox').value = '';
        setFilterArray('');
        break;
    }
  };

  return (
    <div className={reNameClass ? 'dropdown active' : 'dropdown'}>
      <input
        type="text"
        className="textBox"
        placeholder="Dropdown menu"
        readOnly
        onClick={(e) => filterFacts(e.target.value)}
      />
      <div className="option">
        {filterFact.map((el) => (
          <option onClick={() => show(el.value)} key={el.id}>
            {el.value}
          </option>
        ))}
      </div>
    </div>
  );
};
