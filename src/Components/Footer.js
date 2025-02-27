import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Abhishek Madhura</h4>
      <h4>Copyright &copy; 2024   AM</h4>
      <div className='footerLinks'>
        <a href="https://github.com/AbhishekMadhura" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/abhishek-madhura-003829298/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:abhishekmadhura34@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/AbhishekMadhura/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer