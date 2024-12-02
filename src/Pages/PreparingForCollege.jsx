import React from "react";
import "./PreparingForCollege.css";

const PreparingForCollege = () => {
  return (
    <div className="preparing-college-container">
      <h1>Resources to Prepare for Your College</h1>
      <p>
        Below you will find links to some great resources on planning for college and your future,
        including sites to search and evaluate colleges and sites to help you plan for the application!
      </p>

      <div className="resources-list">
        {/* Resource 1 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_2a0b1a9a18944328bcca8bfd9738b7c4~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_2a0b1a9a18944328bcca8bfd9738b7c4~mv2.png"
            alt="College Confidential"
            className="resource-logo"
          />
          <h3>COLLEGE CONFIDENTIAL</h3>
          <p>
            College Confidential is kind of like the "Reddit" of college prep support. It is a
            collection of forums where students can connect, ask questions, and get real answers.
            For instance, they have a great crowd-sourced list of dates for award letters.
          </p>
          <a
            href="https://www.collegeconfidential.com/"
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
            src="https://college-insight.org/wp-content/uploads/2024/07/logo.png"
            alt="College Insight"
            className="resource-logo"
          />
          <h3>COLLEGE INSIGHT</h3>
          <p>
            If you want the nitty-gritty data to compare colleges, College Insight is the website
            for you. You can get into incredible levels of detail on everything from the percentage
            of graduates with debt to graduation rates for Pell Eligible students.
          </p>
          <a
            href="https://college-insight.org/"
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
            src="https://nces.ed.gov/collegenavigator/images/colnav_logo1.gif"
            alt="College Navigator"
            className="resource-logo"
          />
          <h3>COLLEGE NAVIGATOR</h3>
          <p>
            While College Navigator's UI might not be the friendliest, it's built directly from
            National Center for Education Statistics data, and it will provide you with some great,
            specific information on any colleges you might be interested in learning more about.
          </p>
          <a
            href="https://nces.ed.gov/collegenavigator/"
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
            src="https://static.wixstatic.com/media/684782_89b2e54e60b840f3b2abb3ba9aa581bb~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_89b2e54e60b840f3b2abb3ba9aa581bb~mv2.jpg"
            alt="College Scorecard"
            className="resource-logo"
          />
          <h3>COLLEGE SCORECARD</h3>
          <p>
            College Scorecard is a great searchable database that gives you quick, easy-to-understand
            stats on colleges, including financial aid!
          </p>
          <a
            href="https://collegescorecard.ed.gov/"
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
            src="https://static.wixstatic.com/media/684782_38fb368dce2e4c9c8558e67dad429466~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_38fb368dce2e4c9c8558e67dad429466~mv2.jpg"
            alt="CollegeBoard"
            className="resource-logo"
          />
          <h3>COLLEGEBOARD</h3>
          <p>
            The "BigFuture" College Planning suite of CollegeBoard provides students with an incredible
            wealth of information including extensive college search tools, step-by-step planning
            guides, and financial aid resources.
          </p>
          <a
            href="https://bigfuture.collegeboard.org/"
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
            src="https://static.wixstatic.com/media/684782_33a34c17321a4b778e3d92f7ee411bf5~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_33a34c17321a4b778e3d92f7ee411bf5~mv2.jpg"
            alt="Getting In Podcast"
            className="resource-logo"
          />
          <h3>GETTING IN</h3>
          <p>
            "Getting In" is a series of polished podcasts put out by Slate that follows a group of high
            school seniors as they navigate the college application process. It features interviews with
            college admissions counselors and office directors, and covers a wide range of common college
            planning and application questions and concerns.
          </p>
          <a
            href="https://podcasts.apple.com/us/podcast/getting-in-your-college-admissions-companion/id1038217593"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 7 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_5af2f88fea144acf9a4f0336e283e783~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_5af2f88fea144acf9a4f0336e283e783~mv2.jpg"
            alt="NHHEAF"
            className="resource-logo"
          />
          <h3>NHHEAF</h3>
          <p>
            New Hampshire Higher Education Assistance Foundation (NHHEAF) is a wonderful resource that
            has over 50 years of experience supporting families and students as they seek to plan and pay
            for higher education.
          </p>
          <a
            href="https://graniteedvance.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 8 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_57fa4151ce554f88943edb8e524f90db~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_57fa4151ce554f88943edb8e524f90db~mv2.png"
            alt="Niche"
            className="resource-logo"
          />
          <h3>NICHE</h3>
          <p>
            While Niche might not provide as detailed data as some of the other search tools here, it does
            a great job of collecting tons of student reviews on colleges and universities. So if you're
            looking to get an inside scoop on schools, look no further.
          </p>
          <a
            href="https://www.niche.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 9 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_241c1e7c00294c93831afb85d0c1329a~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_241c1e7c00294c93831afb85d0c1329a~mv2.jpg"
            alt="The ACT Test"
            className="resource-logo"
          />
          <h3>THE ACT Test</h3>
          <p>
            The ACT offers information on College and Career readiness in addition to study tools, resources,
            and information on the ACT.
          </p>
          <a
            href="https://www.act.org/"
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

export default PreparingForCollege;
