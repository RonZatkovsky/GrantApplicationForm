import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      {/* About the Grant Section */}
      <section className="container mt-3 mx-2 bg-light border-bottom border-3 mx-auto">
        <div className=" row text-center align-items-center">
          <div className='col-md-9 col-sm-7'>
            <h1 className="display-6 text-primary mb-2">Introducing the Beginners Network Grant by Black Corner Investments Inc.</h1>
            <p className="lead mb-3">
              Supporting startup businesses and entrepreneurs in their first year of operation
            </p>
            <p className="lead mb-3">
              Founded by Executive Director Kenia Massey (affectionately known as Mrs. Kay), Black Corner Investments Inc. is proud to announce its very first grant initiative.
            </p>
          </div>
          <div className='col-md-3 col-sm-5 mb-3'>
            <img className='w-100 h-100' src="/images/formpicture.jpg" alt='Mrs Kay' />
          </div>
        </div>
      </section>
      <section className="row py-3">
        <div className="container text-center">
          <h2 className="h4 mb-3">About the Grant</h2>
          <p>
            If anyone understands the ups and downs of starting a business, it’s Mrs. Kay. Like many small business owners, she started with a powerful vision—believing everything would work out. But as time passed and business slowed down, she faced the harsh reality that without support, even the best ideas can struggle.
          </p>
          <p>
            What made a difference in her journey? <span className="font-weight-bold text-danger">Grants.</span> She believes that the right grant at the right time can not only save a business but help it grow and thrive. That’s why she’s paying it forward by launching her first grant program to uplift other small business owners.
          </p>
          <p>
            Mrs. Kay has personally invested her own funds into this effort, and to continue building this program for future rounds, a <span className="font-weight-bold text-danger">$20 application fee</span> is required from each applicant. This fee will go directly toward helping more businesses in future rounds—your contribution keeps the mission alive.
          </p>
        </div>
      </section>

      {/* Grant Details Section */}
      <section className="row py-3 bg-light">
        <div className="container p-2 rounded shadow-lg">
          <h3 className="h4 text-center mb-3">Grant Details</h3>
          <ul className="list-unstyled px-5">
            <li><strong>Launch Date:</strong> April 15th, 2025</li>
            <li><strong>Application Deadline:</strong> June 15th, 2025</li>
            <li><strong>Winners Announced:</strong> July (TBD)</li>
            <li><strong>Number of Awards:</strong> 2 Grants</li>
            <li><strong>Grant Amount:</strong> Up to $2,500 each</li>
            <li><strong>Eligibility:</strong>
              <ul className="pl-3">
                <li>One grant will go to a startup business (pre-launch or just launched)</li>
                <li>One grant will go to a business that’s been operating for 6 to 12 months</li>
              </ul>
            </li>
            <li><strong>Judging Process:</strong> A bipartisan panel of 3 judges will review all applications and select the winners fairly and transparently.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="row text-center py-3">
        <div className="container">
          <h2 className="h4 mb-3">This is More Than Just a Grant</h2>
          <p className="lead mb-3">
            It’s a lifeline, a boost, and a belief in your potential. If you're ready to take your business to the next level and could use the extra support, we encourage you to apply and be part of something meaningful.
          </p>
          <p><strong>Let’s build together. Let’s grow together.</strong></p>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="row py-2 shadow mb-5">
        <div className="container text-center">
          <h1 className="h3 mb-3">Eligibility Criteria for the Beginners Network Grant</h1>
          <p className="lead mb-4">
            To qualify for the Beginners Network Grant by Black Corner Investments Inc., applicants must meet the following criteria:
          </p>

          <div className="row">
            <div className="col-md-12 text-start">
              <h3 className="h5 text-left">✅ Business Status:</h3>
              <p className="m-0">You must be either:</p>
              <ul className="list pl-3">
                <li>A startup business (pre-launch or just launched) with a business name and a business plan OR</li>
                <li>A business that has been in operation for no more than 12 months (6-12 months in business) with an EIN (Employer Identification Number)</li>
              </ul>

              <h3 className="h5 text-left">✅ Location Requirement:</h3>
              <ul className="list-unstyled pl-3">
                <li>Your business must be located within the United States</li>
              </ul>

              <h3 className="h5 text-left">✅ Application Fee:</h3>
              <ul className="list-unstyled pl-3">
                <li>A <span className="font-weight-bold text-danger">$20 application fee</span> is required to submit your grant application. This fee helps sustain and grow the grant program to support more businesses in the future.</li>
              </ul>

              <h3 className="h5 text-left">Who is NOT Eligible?</h3>
              <ul className="list-unstyled pl-3">
                <li><span className="font-weight-bold text-danger">❌</span> Businesses that have been operating for more than 12 months</li>
                <li><span className="font-weight-bold text-danger">❌</span> Startups that do not have a business name or business plan</li>
                <li><span className="font-weight-bold text-danger">❌</span> Businesses that have been in operation for 6-12 months without an EIN</li>
                <li><span className="font-weight-bold text-danger">❌</span> Businesses located outside of the United States</li>
              </ul>

              <p className="lead mt-3">
                This ensures that the grant stays focused on helping <strong>true startups and first-year businesses</strong> get the funding they need to grow.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="row">
        <div className="container text-center pb-3">
          <p>If you think you're eligible, please click on the button below to fill out an application</p>
          <Link to={'/form'} className="btn btn-primary">Continue to application</Link>
        </div>
      </section>

    </>
  );
};