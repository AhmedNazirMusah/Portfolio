import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
import { Link } from 'react-router-dom';

const MenuModal = ({ CloseMenuModal }) => (
  <div className="menu-mobile modal">
    <div className="modal-content">
      <ul>
        <button type="button" className="close" onClick={CloseMenuModal}>&times;</button>
        <Link to="/">Home</Link>
        <Link onClick={CloseMenuModal} to="/projects"> Porfolio</Link>
        <Link onClick={CloseMenuModal} to="/about"> About</Link>
        <Link onClick={CloseMenuModal} to="/contact"> Contact</Link>
      </ul>
    </div>
  </div>
);

MenuModal.propTypes = {
  CloseMenuModal: PropTypes.func.isRequired,
};

export default MenuModal;
