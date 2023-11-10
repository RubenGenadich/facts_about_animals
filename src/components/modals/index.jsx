import React from 'react';

import moment from 'moment';

import './style.css';

export const ModalFact = ({ openModal, setOpenModal, setSwitchContainer }) => {
  const { fact } = openModal;
  const { text, type, createdAt, updatedAt, source, status } = fact;

  const closeModal = () => {
    setSwitchContainer(false);
    setTimeout(() => {
      setOpenModal({
        flag: false,
        fact: null,
      });
    }, 600);
  };
  return (
    <>
      <h3>{text}</h3>
      <p>fact about: {type}s</p>
      <p>Create fact: {moment(createdAt).format('LLL')}</p>
      <p>Last update fact: {moment(updatedAt).format('LLL')}</p>
      <p>Source: {source}</p>
      <p>{`Verified: ${status.verified}`}</p>
      <button onClick={() => closeModal()}>
        <span>Close</span>
      </button>
    </>
  );
};
