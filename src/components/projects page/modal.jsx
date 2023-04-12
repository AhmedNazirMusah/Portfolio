import React from 'react';
import { RxDotFilled } from 'react-icons/rx';
import PropTypes from 'prop-types';
import './modal.css';

function Modal({ project, handleCloseModal }) {
  return (
    <div className="project-modal">
      <div className="modal-content">
        <div className="mod-1">
          <h2 className="tonic-title">{project.title}</h2>
          <button type="button" className="close" onClick={handleCloseModal}>&times;</button>
        </div>
        <div className="u-c">
          <h5>{project.feature[0]}</h5>
          <RxDotFilled />
          <h5 className="sec">{project.feature[1]}</h5>
          <RxDotFilled />
          <h5 className="sec">
            {' '}
            {project.feature[2]}
          </h5>
        </div>
        <img src={project.cardImage} alt="snaphot" className="ing" />
        <div className="detailed-info">
          <p>{project.long}</p>
          <div>
            <ul className="u-html">
              <li>{project.smalltags[0]}</li>
              <li>{project.smalltags[1]}</li>
              <li>{project.smalltags[2]}</li>
            </ul>
            <ul className="u-html">
              <li>{project.smalltags[3]}</li>
            </ul>
            <div className="source">
              <button type="button" className="see"><a href={project.liveLink}>See live</a></button>
              <button type="button" className="see"><a href={project.source}>See Source</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.shape({
    cardImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bigtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    feature: PropTypes.arrayOf(PropTypes.string).isRequired,
    long: PropTypes.string.isRequired,
    smalltags: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
  handleCloseModal: PropTypes.func.isRequired,
};
export default Modal;
