import React from "react";
import './modal.css';
import { Link } from 'react-router-dom'

const MenuModal = ({ CloseMenuModal }) => {
    return (
      <div className="menu-mobile modal">
        <div className='modal-content'>
            <ul >
                <span className='close' onClick={CloseMenuModal}>&times;</span>
                <li  onClick={CloseMenuModal}><Link to='/' >Home</Link></li>
                <li  onClick={CloseMenuModal}><Link to='/projects'> Porfolio</Link></li>
                <li  onClick={CloseMenuModal}><Link to='/about'> About</Link></li>
                <li  onClick={CloseMenuModal}><Link to='/contact'> Contact</Link></li>
                
            </ul>
       </div>
      </div>
    );
  }
  
  export default MenuModal;