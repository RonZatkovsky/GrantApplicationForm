import React, { useState } from "react";

export const Startup = ({ packageEmail, name, setName, email, setEmail }) => {
    const [businessName, setBusinessName] = useState({ question: "1. What is the name of your business?", value: "" })
    const [businessPlan, setBusinessPlan] = useState({ question: "2. Do you currently have a business plan?", value: "" })
    const [businessInspiration, setBusinessInspiration] = useState({ question: "3. What inspired you to start this business? (Max 250 words)", value: "" })
    const [businessProblem, setBusinessProblem] = useState({ question: "4. What problem does your business solve or what need does it meet? (Max 250 words)", value: "" })
    const [personalInvestment, setPersonalInvestment] = useState({ question: "5. Have you invested any of your own money into this idea? If so, how much? (Max 250 words)", value: "" })
    const [shortTermGoals, setShortTermGoals] = useState({ question: "6. What are your short-term goals for your business (next 6–12 months)? (Max 250 words)", value: "" })
    const [grantUse, setGrantUse] = useState({ question: "7. How do you plan to use the grant funds if awarded? (Max 250 words)", value: "" })
    const [targetAudience, setTargetAudience] = useState({ question: "8. Who is your target audience or customer base? (Max 250 words)", value: "" })
    const [stepsTaken, setStepsTaken] = useState({ question: "9. What steps have you taken so far to begin operating your business (licenses, website, social media, marketing, etc.)? (Max 250 words)", value: "" })
    const [businessPassion, setBusinessPassion] = useState({ question: "10. What makes you passionate about this business idea? (Max 250 words)", value: "" })

    return (
        <div className="container">
            <h1 className="text-center mb-4">Startup Business Grant Application</h1>

            <form
                id="grantApplicationForm"
                onSubmit={(e) => {
                    e.preventDefault()
                    packageEmail([
                        businessName,
                        businessPlan,
                        businessInspiration,
                        businessProblem,
                        personalInvestment,
                        shortTermGoals,
                        grantUse,
                        targetAudience,
                        stepsTaken,
                        businessPassion
                    ], "Startup Business Grant Application")
                }
                }
            >
                <div>
                    <div className="mb-3 w-50">
                        <label htmlFor="businessDuration" className="form-label">{name.question}</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="First Last"
                            required
                            onChange={(e) => { setName({ ...name, value: e.target.value }) }}
                            value={name.value}
                        />
                    </div>
                    <div className="mb-3 w-50">
                        <label htmlFor="businessDuration" className="form-label">{email.question}</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="example@example.example"
                            required
                            onChange={(e) => { setEmail({ ...email, value: e.target.value }) }}
                            value={email.value}
                        />
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="mb-3">
                    <label htmlFor="businessName" className="form-label">{businessName?.question}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="businessName"
                        placeholder="Enter your business name"
                        required
                        value={businessName.value}
                        onChange={(e) => { setBusinessName({ ...businessName, value: e.target.value }) }}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">{businessPlan?.question}</label>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="businessPlan"
                            id="planYes"
                            value="yes"
                            required
                            onChange={(e) => { setBusinessPlan({ ...businessPlan, value: e.target.value }) }}
                        />
                        <label className="form-check-label" htmlFor="planYes">Yes <strong>(please send your business plan with you'r name and business name to <a href="#">blackcornerinvestments10@gmail.com</a>)</strong></label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="businessPlan"
                            id="planNo"
                            value="no"
                            required
                            onChange={(e) => { setBusinessPlan({ ...businessPlan, value: e.target.value }) }}
                        />
                        <label className="form-check-label" htmlFor="planNo">No (Stop here — this grant may not be for you. Please return to this application once you’ve created a business plan.)</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessInspiration" className="form-label">{businessInspiration?.question}</label>
                    <textarea
                        className="form-control"
                        id="businessInspiration"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your inspiration"
                        required
                        value={businessInspiration.value}
                        onChange={(e) => { setBusinessInspiration({ ...businessInspiration, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessProblem" className="form-label">{businessProblem?.question}</label>
                    <textarea
                        className="form-control"
                        id="businessProblem"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain the problem your business solves"
                        required
                        value={businessProblem.value}
                        onChange={(e) => { setBusinessProblem({ ...businessProblem, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="personalInvestment" className="form-label">{personalInvestment?.question}</label>
                    <textarea
                        className="form-control"
                        id="personalInvestment"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain your investment"
                        required
                        value={personalInvestment.value}
                        onChange={(e) => { setPersonalInvestment({ ...personalInvestment, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="shortTermGoals" className="form-label">{shortTermGoals?.question}</label>
                    <textarea
                        className="form-control"
                        id="shortTermGoals"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your goals"
                        required
                        value={shortTermGoals.value}
                        onChange={(e) => { setShortTermGoals({ ...shortTermGoals, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="grantUse" className="form-label">{grantUse?.question}</label>
                    <textarea
                        className="form-control"
                        id="grantUse"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain how you will use the funds"
                        required
                        value={grantUse.value}
                        onChange={(e) => { setGrantUse({ ...grantUse, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="targetAudience" className="form-label">{targetAudience?.question}</label>
                    <textarea
                        className="form-control"
                        id="targetAudience"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your target audience"
                        required
                        value={targetAudience.value}
                        onChange={(e) => { setTargetAudience({ ...targetAudience, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="stepsTaken" className="form-label">{stepsTaken?.question}</label>
                    <textarea
                        className="form-control"
                        id="stepsTaken"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain the steps you’ve taken"
                        required
                        value={stepsTaken.value}
                        onChange={(e) => { setStepsTaken({ ...stepsTaken, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessPassion" className="form-label">{businessPassion?.question}</label>
                    <textarea
                        className="form-control"
                        id="businessPassion"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain your passion"
                        required
                        value={businessPassion.value}
                        onChange={(e) => { setBusinessPassion({ ...businessPassion, value: e.target.value }) }}
                    >
                    </textarea>
                </div>

                <div className="row mx-auto">
                    <div className="row mx-auto">
                        <p>Please make a payment of 20 dollars by scanning the QR code below or click <a href="https://www.paypal.com/ncp/payment/5FMGE9V64LXY8">HERE</a></p>
                        <strong className="mb-2">On the payment page, make sure to include in the note section the name you used in the application and the business name.</strong>
                        <p className="text-danger">Note that your submission will not be reviewed if you haven't made the payment.</p>
                    </div>
                    <div className="row col-6 mx-auto">
                        <img src="/images/payinfo.jpg" alt="QR link for easy payment" />
                    </div>
                </div>

                <div className="text-center">
                    <button type="submit" className="btn btn-primary mb-3">Submit Application</button>
                </div>
            </form>
        </div>
    )
}