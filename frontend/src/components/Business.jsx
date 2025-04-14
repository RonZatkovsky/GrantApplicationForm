import React, { useState } from "react";

export const Business = ({ packageEmail, name, setName, email, setEmail }) => {
    const [businessNameAndEIN, setBusinessNameAndEIN] = useState({ question: "1. What is the name of your business and your EIN number?", value: "" })
    const [businessDuration, setBusinessDuration] = useState({ question: "2. How long have you been in business? (Include start date)", value: "" })
    const [businessInspiration, setBusinessInspiration] = useState({ question: "3. What inspired you to start your business? (Max 250 words)", value: "" })
    const [businessProducts, setBusinessProducts] = useState({ question: "4. What products or services do you offer? (Max 250 words)", value: "" })
    const [businessChallenge, setBusinessChallenge] = useState({ question: "5. What has been your biggest challenge in your first year of business? (Max 250 words)", value: "" })
    const [businessFunding, setBusinessFunding] = useState({ question: "6. How have you been funding your business so far (self-funded, loans, sales revenue, etc.)? (Max 250 words)", value: "" })
    const [businessIncome, setBusinessIncome] = useState({ question: "7. Have you generated any income yet? If so, how much approximately? (Max 250 words)", value: "" })
    const [grantFundUse, setGrantFundUse] = useState({ question: "8. How will you use the grant funds to grow or strengthen your business? (Max 250 words)", value: "" })
    const [businessDifferentiator, setBusinessDifferentiator] = useState({ question: "9. What sets your business apart from others in your industry or area? (Max 250 words)", value: "" })
    const [businessVision, setBusinessVision] = useState({ question: "10. What is your vision for the next year of your business? (Max 250 words)", value: "" })

    const [file, setFile] = useState(null)



    return (
        <div className="container">
            <h1 className="text-center mb-4">6–12 Month Business Owner Grant Application</h1>

            <form
                id="businessOwnerGrantForm"
                onSubmit={(e) => {
                    e.preventDefault()
                    const reponseMessage = packageEmail([
                        businessNameAndEIN,
                        businessDuration,
                        businessInspiration,
                        businessProducts,
                        businessChallenge,
                        businessFunding,
                        businessIncome,
                        grantFundUse,
                        businessDifferentiator,
                        businessVision
                    ], "6–12 Month Business Owner Grant Application")
                }}
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
                    <label htmlFor="businessNameAndEIN" className="form-label">{businessNameAndEIN.question}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="businessNameAndEIN"
                        placeholder="Business name - EIN number"
                        required
                        onChange={(e) => {
                            setBusinessNameAndEIN({ ...businessNameAndEIN, value: e.target.value })
                        }}
                        value={businessNameAndEIN.value}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="businessDuration" className="form-label">{businessDuration.question}</label>
                    <input
                        type="text"
                        className="form-control"
                        id="businessDuration"
                        placeholder="Enter how long you've been in business and the start date"
                        required
                        onChange={(e) => { setBusinessDuration({ ...businessDuration, value: e.target.value }) }}
                        value={businessDuration.value}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="businessInspiration" className="form-label">{businessInspiration.question}</label>
                    <textarea
                        className="form-control"
                        id="businessInspiration"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your inspiration"
                        required
                        onChange={(e) => { setBusinessInspiration({ ...businessInspiration, value: e.target.value }) }}
                        value={businessInspiration.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessProducts" className="form-label">{businessProducts.question}</label>
                    <textarea
                        className="form-control"
                        id="businessProducts"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe the products or services you offer"
                        required
                        onChange={(e) => { setBusinessProducts({ ...businessProducts, value: e.target.value }) }}
                        value={businessProducts.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessChallenge" className="form-label">{businessChallenge.question}</label>
                    <textarea
                        className="form-control"
                        id="businessChallenge"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your biggest challenge"
                        required
                        onChange={(e) => { setBusinessChallenge({ ...businessChallenge, value: e.target.value }) }}
                        value={businessChallenge.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessFunding" className="form-label">{businessFunding.question}</label>
                    <textarea
                        className="form-control"
                        id="businessFunding"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain how you’ve been funding your business"
                        required
                        onChange={(e) => { setBusinessFunding({ ...businessFunding, value: e.target.value }) }}
                        value={businessFunding.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessIncome" className="form-label">{businessIncome.question}</label>
                    <textarea
                        className="form-control"
                        id="businessIncome"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your income generation"
                        required
                        onChange={(e) => { setBusinessIncome({ ...businessIncome, value: e.target.value }) }}
                        value={businessIncome.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="grantFundUse" className="form-label">{grantFundUse.question}</label>
                    <textarea
                        className="form-control"
                        id="grantFundUse"
                        rows="5"
                        maxLength="250"
                        placeholder="Explain how you plan to use the grant funds"
                        required
                        onChange={(e) => { setGrantFundUse({ ...grantFundUse, value: e.target.value }) }}
                        value={grantFundUse.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessDifferentiator" className="form-label">{businessDifferentiator.question}</label>
                    <textarea
                        className="form-control"
                        id="businessDifferentiator"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe what makes your business unique"
                        required
                        onChange={(e) => { setBusinessDifferentiator({ ...businessDifferentiator, value: e.target.value }) }}
                        value={businessDifferentiator.value}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="businessVision" className="form-label">{businessVision.question}</label>
                    <textarea
                        className="form-control"
                        id="businessVision"
                        rows="5"
                        maxLength="250"
                        placeholder="Describe your vision for the next year"
                        required
                        onChange={(e) => { setBusinessVision({ ...businessVision, value: e.target.value }) }}
                        value={businessVision.value}
                    ></textarea>
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