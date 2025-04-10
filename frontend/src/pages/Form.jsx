import React, { useEffect } from "react";
import { Startup } from "../components/Startup";
import { Business } from "../components/Business";
import axios from 'axios';

export const Form=()=>{


  const sendEmail = async (recipient, subject, body) => {
    try {
      const apiUrl = `${window.location.origin}/grantapplication/api/sendEmail`;
      console.log(apiUrl)
      const response = await axios.post(apiUrl, {
        recipient,
        subject,
        body,
      });
      console.log('Email sent:', response.data);
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
  };

  useEffect(()=>{
    sendEmail('recipient@example.com', 'Test Subject', 'Test Body');
  },[])

    return(
    <div className='row mt-5'>
      {/*Pills navbar betwen new businesses and 6-12 month businesses */}
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
          <Startup sendEmail={sendEmail}/>
        </div>
        {/*6-12 Business start */}
        <div className="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">
          <Business sendEmail={sendEmail}/>
        </div>
      </div>
    </div>
    )
}