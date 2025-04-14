import React, { useEffect, useState } from "react";
import { Startup } from "../components/Startup";
import { Business } from "../components/Business";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

export const Form = () => {
  const [name, setName] = useState({ question: "Please enter your name", value: "" })
  const [email, setEmail] = useState({ question: "Your email so we can contact you if selected", value: "" })

  const navigate = useNavigate()

  const sendEmail = async (body, subject) => {
    try {
      const apiUrl = `${window.location.origin}/api/sendEmail`;
      console.log(apiUrl)
      const response = await axios.post(apiUrl, {
        recipient: 'blackcornerinvestments10@gmail.com',
        subject: subject,
        body: body,
      });
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }

  };

  const packageEmail = async (formInputs, formType) => {
    //console.log(formInputs)
    const formWithContact=[name,email,...formInputs]
    const formList = formWithContact?.map((obj) => `${obj.question}\n ${obj.value}\n\n`)
    const formString = formList.join("")
    //console.log(formString)
    await sendEmail(formString,formType+`, ${name.value}`) 
    navigate('/success')
  }

  return (
    <div className='row mt-5'>
      <Link to={'/'}>Back</Link>
      {/*Pills navbar betwen new businesses and 6-12 month businesses */}
      <div className="d-flex justify-content-center">
        <h2>Select Your Application Type</h2>
      </div>
      <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link active" id="pills-startup-tab" data-bs-toggle="pill" data-bs-target="#pills-startup" type="button" role="tab" aria-controls="pills-startup" aria-selected="true">Startup Business Grant</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link" id="pills-business-tab" data-bs-toggle="pill" data-bs-target="#pills-business" type="button" role="tab" aria-controls="pills-business" aria-selected="false">6–12 Month Business Owner Grant</button>
        </li>
      </ul>
      <div className="tab-content" id="pills-tabContent">
        {/*Startup pill start */}
        <div className="tab-pane fade show active" id="pills-startup" role="tabpanel" aria-labelledby="pills-startup-tab">
          <Startup packageEmail={packageEmail} name={name} setName={setName} email={email} setEmail={setEmail} />
        </div>
        {/*6-12 Business start */}
        <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
          <Business packageEmail={packageEmail} name={name} setName={setName} email={email} setEmail={setEmail} />
        </div>
      </div>
    </div>
  )
}