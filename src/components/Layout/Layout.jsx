import React from 'react';
import { Outlet } from 'react-router-dom';
import EasyHeader from '../EasyHeader';
import Footer from '../Footer';
import Header from '../Header';
import { Modal } from '../Modal';

export const Layout = () => {
  const [activeModal, setActiveModal] = React.useState(false);
  const [isContacts, setIsContacts] = React.useState(false);
  return (
    <>
      <EasyHeader setActiveModal={setActiveModal} />
      <Header setIsContacts={setIsContacts} />
      <Outlet context={{ setActiveModal, isContacts, setIsContacts }} />
      <Footer setActiveModal={setActiveModal} />
      {activeModal && <Modal setActiveModal={setActiveModal} />}
    </>
  );
};
