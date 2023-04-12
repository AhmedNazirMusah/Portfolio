import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import PropTypes from 'prop-types';
import Modal from './modal';

function ProjectItem({ project }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="cards c-class">
      <img src={project.cardImage} alt="snaphot" className="p-img" />
      <div>
        <h2>{project.title}</h2>
        <section className="u-c">
          <h5>{project.feature[0]}</h5>
          <RxDotFilled />
          <h5 className="sec">{project.feature[1]}</h5>
          <RxDotFilled />
          <h5 className="sec">{project.feature[2]}</h5>
        </section>
        <p>
          {project.short}
        </p>
        <ul className="u-html">
          <li>{project.bigtags[0]}</li>
          <li>{project.bigtags[1]}</li>
          <li>{project.bigtags[2]}</li>
        </ul>
        <button type="button" className="see" onClick={handleShowModal}>See Project</button>
        {showModal && <Modal project={project} handleCloseModal={handleCloseModal} />}
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  project: PropTypes.shape({
    cardImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bigtags: PropTypes.arrayOf(PropTypes.string).isRequired,
    feature: PropTypes.arrayOf(PropTypes.string).isRequired,
    long: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired,
    smalltags: PropTypes.arrayOf(PropTypes.string).isRequired,
    liveLink: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectItem;
