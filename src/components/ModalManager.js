import React from 'react';
import { useSelector } from 'react-redux';
import TestModal from './TestModal';

export default function ModalManager() {
  const modalLookup = {
    TestModal,
  };
  const currentModal = useSelector((state) => state.modals);
  let renderedModal;
  if (currentModal) {
    const { modalType } = currentModal;
    const ModalComponent = modalLookup[modalType];
    renderedModal = <ModalComponent />;
  }

  return <span>{renderedModal}</span>;
}
