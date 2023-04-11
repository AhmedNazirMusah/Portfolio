import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx'
import Modal from './modal';

function ProjectItem({ project }) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleCloseModal = () => {
    setShowModal(false);
  }

  return (
      <div class="cards c-class">
      <img src={project.cardImage} alt="snaphot" class="p-img"></img>
      <div>
      <h2>{project.title}</h2>
      <section class="u-c">
        <h5>{project.feature[0]}</h5>
        <RxDotFilled />
        <h5 class="sec">{project.feature[1]}</h5>
        <RxDotFilled />
        <h5 class="sec">{project.feature[2]}</h5>  
      </section>
      <p>
      {project.short}
      </p>
      <ul class="u-html">
        <li>html</li>
        <li>css</li>
        <li>javascript</li>
      </ul>
      <button className='see' onClick={handleShowModal}>See Project</button>
      {showModal && <Modal project={project} handleCloseModal={handleCloseModal} />}
      </div>
    </div>
  );
};

export default ProjectItem;
