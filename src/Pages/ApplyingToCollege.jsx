import React from "react";
import "./ApplyingToCollege.css";

const ApplyingToCollege = () => {
  return (
    <div className="applying-college-container">
      <h1>Resources for Applying to College</h1>
      <p>
        Once you've put together your fit and match list, you'll need to complete the FAFSA, the CSS Profile, and your application. Below are some resources to help you out!
      </p>

      <div className="resources-list">
        {/* Resource 1 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_e3f4961d52224707a1cc4897ba4c26cd~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_e3f4961d52224707a1cc4897ba4c26cd~mv2.png"
            alt="CSS Profile"
            className="resource-logo"
          />
          <h3>CSS PROFILE</h3>
          <p>
            Many colleges look for CollegeBoard's CSS Profile (in addition to the FAFSA) in order to get accurate information on your financial status and potential financial aid.
          </p>
          <a
            href="https://cssprofile.collegeboard.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 2 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_c47165e9015e4a16aa508b2a8a31446e~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_c47165e9015e4a16aa508b2a8a31446e~mv2.jpg"
            alt="FAFSA"
            className="resource-logo"
          />
          <h3>FAFSA</h3>
          <p>
            This is the central location and official website for information on filling out the FAFSA (Free Application for Federal Student Aid).
          </p>
          <a
            href="https://studentaid.gov/h/apply-for-aid/fafsa"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 3 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_afed911382ec4add836db8f8bda813e7~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_afed911382ec4add836db8f8bda813e7~mv2.png"
            alt="CollegeFindMe"
            className="resource-logo"
          />
          <h3>COLLEGEFINDME</h3>
          <p>
            After students create an account and profile on CollegeFindMe, they can search for colleges they are interested in and add them to an "interested" list. Colleges then get a notification and can directly reach out to students they are interested in to offer application fee waivers, scholarships, financial aid packages, etc.
          </p>
          <a
            href="https://honorsociety.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 4 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_a0da1b2f5e454f4f8d1d436853de3f97~mv2.gif"
            alt="QuestBridge"
            className="resource-logo"
          />
          <h3>QUESTBRIDGE</h3>
          <p>
            QuestBridge is an elite organization that partners with colleges in order to provide generous financial aid and full scholarships. Students who have done exceptionally well in and outside of school can apply to join in order to be matched up with these partner colleges.
          </p>
          <a
            href="https://www.questbridge.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 5 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_b406c358d8d24db98b8ce9916c93c53d~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_b406c358d8d24db98b8ce9916c93c53d~mv2.jpg"
            alt="The Common Application"
            className="resource-logo"
          />
          <h3>THE COMMON APPLICATION</h3>
          <p>
            The Common Application is where you will build out your portfolio and apply to an available 750 colleges! Don't forget to add your advisor and the director as counselors/recommenders so that we can see your progress and offer support.
          </p>
          <a
            href="https://www.commonapp.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 6 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_2e1901c3e2b04e1889c1e6388f3ed820~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_2e1901c3e2b04e1889c1e6388f3ed820~mv2.jpg"
            alt="The Coalition for College Access"
            className="resource-logo"
          />
          <h3>THE COALITION FOR COLLEGE ACCESS</h3>
          <p>
            The Coalition, like The Common Application, allows you to build out an extensive portfolio so that you can apply directly to colleges. It also offers various fee waivers and resources. Make an account or check yours here!
          </p>
          <a
            href="https://www.coalitionforcollegeaccess.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ApplyingToCollege;
