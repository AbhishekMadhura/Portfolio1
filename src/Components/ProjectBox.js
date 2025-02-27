import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    
    StaffManagementSystemDesc : "The system allows easy access and updating of employee data. It generates timely reports to help monitor employees and support tasks like performance appraisals and promotions",
    StaffManagementSystemGithub : "https://github.com/AbhishekMadhura/StaffManagementSystem",
    StaffManagementSystemWebsite : "https://devanshsahni.github.io/tindog/",

    SentimentAnalysisDesc : "Developed a machine learning model using Natural Language Processing (NLP) to classify the sentiment  of customer reviews, enabling the company to identify key areas for improvement and enhance customer satisfaction.",
    SentimentAnalysisGithub : "https://github.com/DevanshSahni/Rog-Free",
    SentimentAnalysisWebsite : "https://devanshsahni.github.io/Rog-Free/",

    NewsletterDesc:"A newsletter signup site made using Mailchimp API where the signups can be monitored from the MailChimp account. This project was made to understand API integration, environment variables and vercel deployment.",
    NewsletterGithub:"",
    NewsletterWebsite:"https://newsletter-signup-teal.vercel.app/",
    
    WigglesDesc:"The system allows easy access and updating of employee data. It generates timely reports to help monitor employees and support tasks like performance appraisals and promotions.",
    WigglesGithub:"https://github.com/DevanshSahni/Wiggles",
    WigglesWebsite:"https://wiggles.vercel.app/",
  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            {/* <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a> */}
        </div>
    </div>
  )
}

export default  ProjectBox;