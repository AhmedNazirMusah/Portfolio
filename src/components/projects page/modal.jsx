import React from 'react';
import { RxDotFilled } from 'react-icons/rx'
import './modal.css';

function Modal({ project, handleCloseModal }) {
  return (
    <div className="project-modal">
      <div className='modal-content'>
      <div className="mod-1">
        <h2 className="tonic-title">{project.title}</h2>
        <span className="close" onClick={handleCloseModal}>&times;</span>
      </div>
      <div className="u-c">
        <h5>{project.feature[0]}</h5>
        <RxDotFilled />
        <h5 className="sec">{project.feature[1]}</h5>
        <RxDotFilled />
        <h5 className="sec"> {project.feature[2]}</h5>  
      </div>
      <img src={project.cardImage} alt="snaphot" className="ing"></img>
      <div className='detailed-info'>
        <p>{project.long}</p>
        <div >
          <ul className="u-html">
            <li>{project.smalltags[0]}</li>
            <li>{project.smalltags[1]}</li>
            <li>{project.smalltags[2]}</li>
          </ul>
          <ul className="u-html">
            <li>{project.bigtags[3]}</li>
          </ul>
          <div className='source'>
            <button className="see"><a href={project.liveLink} >See live</a></button>
            <button className="see"><a href={project.source} >See Source</a></button>
          </div>
        </div>
      </div>
      </div>
  </div>
  );
}

export default Modal;

