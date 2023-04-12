import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import MenuModal from './MenuModal';

const Navbar = () => {
  const [ShowModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const OpenMenuModal = () => {
    setShowModal(true);
    setIsOpen(true);
  };
  const CloseMenuModal = () => {
    setShowModal(false);
    setIsOpen(false);
  };

  return (
    <div>
      <nav>
        <ul className="zee">
          <li className="li-class test"><Link to="/" class="welcome">Ahmed.N</Link></li>
          <li className="menu-mobile"><button type="button" onClick={OpenMenuModal}><GrMenu className="menu" alt="menu" /></button></li>
          {ShowModal && <MenuModal isOpen={isOpen} CloseMenuModal={CloseMenuModal} />}
          <li className="detailed-nav">
            <ul className="dnav-list">
              <li><Link to="/projects"> Portfolio</Link></li>
              <li><Link to="/about"> About</Link></li>
              <li><Link to="/contact"> Contact</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
