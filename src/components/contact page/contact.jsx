import React from 'react';

const Contact = () => (
  <div>
    <form id="form-input" action="https://formspree.io/f/mwkzpvpy" method="post">
      <div className="forms" id="Contact-me">
        <h3>Contact Me</h3>
        <p>
          If you have an application you are interested in developing,
          a feature that you need built or a project that needs coding. I’d love to help with it
          {' '}

        </p>
        <input type="text" placeholder="Name" maxLength="30" className="f-input" name="Name" required id="name-input" />
        <input type="email" placeholder="Email" name="Email" className="f-input" required id="email-input" />
        <textarea placeholder="Write your message here" className="f-input" maxLength="500" name="message" required id="text-input" />
        <button id="form-submit" className="submit-btn" type="submit">Get in Touch</button>
        <span id="message" />
      </div>
    </form>
  </div>
);

export default Contact;
