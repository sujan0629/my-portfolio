import React, { useState } from 'react'

import { images } from '../../constants';
import { AppWrapp, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Footer.scss'

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } =e.target;

    setFormData({ ...formData, [name]: value });
  }
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      mesage: message,
    }

    client.create(contact)
    .then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })

  }

  return (
    <>
    <div className="headdd">
    <h2 className="head-text">"Let's chat <span>&</span> connect !</h2>
    </div>
    <div className="app__footer-cards">

      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile" />
        <a href="tel: +977 9762475315" className="p-text">+977-9762475315</a>
      </div>
      <div className="app__footer-card">
        <img src={images.email} alt="email" />
        <a href="mailto:sujanbhatta0629@gmail.com" className="p-text">sujanbhatta0629@gmail.com</a>
      </div>
    </div>

    {!isFormSubmitted ?
    <div className="app__footer-form app__flex">
      <div className="app__flex">
        <input type="text" className="p-text" placeholder="Your Name" name="name" value={name} required onChange={handleChangeInput} />
      </div>
      <div className="app__flex">
        <input type="email" className="p-text" placeholder="Your Email" name="email" value={email} required onChange={handleChangeInput} />
      </div>
      <div>
        <textarea
        className="p-text"
        required
        placeholder="Your Message"
        value={message}
        name="message"
        onChange={handleChangeInput}
        />
      </div>
      <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    : <div>
      <div className="footer-feed">
      <h3 className="head-text">[<span> Thank you </span>for reaching out 🙌 ] !</h3>
      </div>
    </div>}
    </>
  )
}

export default AppWrapp(
  MotionWrap(Footer, 'app__footer'),
  'footer',
  "app__whitebg"
  );
