import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ModalFact } from '../modals/index';
import { getCats } from '../../reducer/cats/action';
import { factCats } from '../../reducer/cats/selectors';
import { FilterSelect } from '../filter_select/index';
import logo from '../../img/logo.svg';
import './style.css';

export const CatsCard = () => {
  const limit = 10,
    typeCats = 'cat,horse', // можно добавить возможность поиск по фактам о других животных;
    dispatch = useDispatch(),
    { data } = useSelector(factCats),
    [switchContainer, setSwitchContainer] = useState(false),
    [reNameClass, setReNameClass] = useState(false),
    [filterArray, setFilterArray] = useState(''),
    [openModal, setOpenModal] = useState({
      flag: false,
      fact: null,
    });

  const renderNewFacts = () => {
    dispatch(getCats(typeCats, limit));
    setFilterArray('');
    document.querySelector('.textBox').value = '';
    setReNameClass(false);
  };

  const factModal = (item) => {
    setSwitchContainer(true);
    setReNameClass(false);
    setOpenModal({
      flag: true,
      fact: (filterArray || data).find((el) => el === item),
    });
  };

  useEffect(() => {
    renderNewFacts();
  }, []);

  return (
    <>
      <div
        id="blur"
        className={switchContainer ? 'container active' : 'container'}
      >
        <div className="container_header">
          <img src={logo} alt="cat die" className="container_header_img" />
          <button onClick={() => renderNewFacts()}>
            <span>New facts</span>
          </button>
          <FilterSelect
            setFilterArray={setFilterArray}
            data={data}
            reNameClass={reNameClass}
            setReNameClass={setReNameClass}
          />
        </div>
        {(filterArray || data).map((el) => (
          <span
            className="container-facts"
            key={el._id}
            onClick={() => factModal(el)}
          >
            {el.text}
          </span>
        ))}
      </div>
      <div id="popup" className={switchContainer ? 'modal active' : 'modal'}>
        {openModal.flag && (
          <ModalFact
            openModal={openModal}
            setOpenModal={setOpenModal}
            setSwitchContainer={setSwitchContainer}
          />
        )}
      </div>
    </>
  );
};
