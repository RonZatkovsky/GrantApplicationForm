import React from "react";

export const Startup = () => {


    return (
        <div class="container">
            <h1 class="text-center mb-4">Startup Business Grant Application</h1>

            <form id="grantApplicationForm">
                <div class="mb-3">
                    <label for="businessName" class="form-label">1. What is the name of your business?</label>
                    <input type="text" class="form-control" id="businessName" placeholder="Enter your business name" required />
                </div>

                <div class="mb-3">
                    <label class="form-label">2. Do you currently have a business plan?</label>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="businessPlan" id="planYes" value="yes" required />
                        <label class="form-check-label" for="planYes">Yes</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="businessPlan" id="planNo" value="no" required />
                        <label class="form-check-label" for="planNo">No (Stop here — this grant may not be for you. Please return to this application once you’ve created a business plan.)</label>
                    </div>
                </div>

                <div class="mb-3">
                    <label for="businessInspiration" class="form-label">3. What inspired you to start this business? (Max 250 words)</label>
                    <textarea class="form-control" id="businessInspiration" rows="5" maxlength="250" placeholder="Describe your inspiration" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessProblem" class="form-label">4. What problem does your business solve or what need does it meet? (Max 250 words)</label>
                    <textarea class="form-control" id="businessProblem" rows="5" maxlength="250" placeholder="Explain the problem your business solves" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="personalInvestment" class="form-label">5. Have you invested any of your own money into this idea? If so, how much? (Max 250 words)</label>
                    <textarea class="form-control" id="personalInvestment" rows="5" maxlength="250" placeholder="Explain your investment" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="shortTermGoals" class="form-label">6. What are your short-term goals for your business (next 6–12 months)? (Max 250 words)</label>
                    <textarea class="form-control" id="shortTermGoals" rows="5" maxlength="250" placeholder="Describe your goals" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="grantUse" class="form-label">7. How do you plan to use the grant funds if awarded? (Max 250 words)</label>
                    <textarea class="form-control" id="grantUse" rows="5" maxlength="250" placeholder="Explain how you will use the funds" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="targetAudience" class="form-label">8. Who is your target audience or customer base? (Max 250 words)</label>
                    <textarea class="form-control" id="targetAudience" rows="5" maxlength="250" placeholder="Describe your target audience" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="stepsTaken" class="form-label">9. What steps have you taken so far to begin operating your business (licenses, website, social media, marketing, etc.)? (Max 250 words)</label>
                    <textarea class="form-control" id="stepsTaken" rows="5" maxlength="250" placeholder="Explain the steps you’ve taken" required></textarea>
                </div>

                <div class="mb-3">
                    <label for="businessPassion" class="form-label">10. What makes you passionate about this business idea? (Max 250 words)</label>
                    <textarea class="form-control" id="businessPassion" rows="5" maxlength="250" placeholder="Explain your passion" required></textarea>
                </div>

                <div class="text-center">
                    <button type="submit" class="btn btn-primary">Submit Application</button>
                </div>
            </form>
        </div>
    )
}