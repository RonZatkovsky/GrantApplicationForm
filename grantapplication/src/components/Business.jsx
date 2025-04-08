import React from "react";

export const Business = () => {


    return (
        <div class="container">
            <h1 class="text-center mb-4">6–12 Month Business Owner Grant Application</h1>

            <form id="businessOwnerGrantForm">
                <div class="mb-3">
                    <label for="businessNameAndEIN" class="form-label">1. What is the name of your business and your EIN number?</label>
                    <input type="text" class="form-control" id="businessNameAndEIN" placeholder="Enter your business name and EIN number" required/>
                </div>

                <div class="mb-3">
                    <label for="businessDuration" class="form-label">2. How long have you been in business? (Include start date)</label>
                    <input type="text" class="form-control" id="businessDuration" placeholder="Enter how long you've been in business and the start date" required/>
                </div>

                <div class="mb-3">
                    <label for="businessInspiration" class="form-label">3. What inspired you to start your business? (Max 250 words)</label>
                    <textarea class="form-control" id="businessInspiration" rows="5" maxlength="250" placeholder="Describe your inspiration" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessProducts" class="form-label">4. What products or services do you offer? (Max 250 words)</label>
                    <textarea class="form-control" id="businessProducts" rows="5" maxlength="250" placeholder="Describe the products or services you offer" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessChallenge" class="form-label">5. What has been your biggest challenge in your first year of business? (Max 250 words)</label>
                    <textarea class="form-control" id="businessChallenge" rows="5" maxlength="250" placeholder="Describe your biggest challenge" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessFunding" class="form-label">6. How have you been funding your business so far (self-funded, loans, sales revenue, etc.)? (Max 250 words)</label>
                    <textarea class="form-control" id="businessFunding" rows="5" maxlength="250" placeholder="Explain how you’ve been funding your business" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessIncome" class="form-label">7. Have you generated any income yet? If so, how much approximately? (Max 250 words)</label>
                    <textarea class="form-control" id="businessIncome" rows="5" maxlength="250" placeholder="Describe your income generation" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="grantFundUse" class="form-label">8. How will you use the grant funds to grow or strengthen your business? (Max 250 words)</label>
                    <textarea class="form-control" id="grantFundUse" rows="5" maxlength="250" placeholder="Explain how you plan to use the grant funds" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessDifferentiator" class="form-label">9. What sets your business apart from others in your industry or area? (Max 250 words)</label>
                    <textarea class="form-control" id="businessDifferentiator" rows="5" maxlength="250" placeholder="Describe what makes your business unique" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessVision" class="form-label">10. What is your vision for the next year of your business? (Max 250 words)</label>
                    <textarea class="form-control" id="businessVision" rows="5" maxlength="250" placeholder="Describe your vision for the next year" required></textarea>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                </div>
            </form>
        </div>
    )
}