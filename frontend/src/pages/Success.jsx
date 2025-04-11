import React from "react";
import { Link } from "react-router-dom";

export const Success = () => {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success mb-4">🎉 Application Submitted!</h1>
      <p className="lead mb-4">
        Thank you for applying for the Beginners Network Grant by Black Corner Investments Inc.
        Your application has been successfully received.
      </p>
      <p>
        Please ensure you've paid your <strong className="text-danger">$20 application fee</strong> to complete the process.
        Only complete applications will be reviewed.
      </p>
      <Link to="/" className="btn btn-outline-primary mt-4">
        Back to Home
      </Link>
    </div>
  );
};
