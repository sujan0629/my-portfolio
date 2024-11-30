import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaLinkedin} from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
      <a href="https://www.facebook.com/sujan.loves.02"><FaFacebookF /></a>
      </div>
      <div>
      <a href="https://www.instagram.com/s.u.jan_2/"><BsInstagram /></a>
      </div>
      <div>
      <a href="mailto:sujanbhatta0629@gmail.com"><MdEmail /></a>
      </div>
      <div>
      <a href="https://www.linkedin.com/in/sujan-bhatta-080206290609sbsrsb/"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default SocialMedia
