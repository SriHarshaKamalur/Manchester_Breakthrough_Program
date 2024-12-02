import React from "react";
import "./PayingForCollege.css";

const PayingForCollege = () => {
  return (
    <div className="paying-college-container">
      <h1>Resources for Paying for College</h1>
      <p>
        Paying for college can seem overwhelming, but the resources below can make it far more manageable!
      </p>

      <div className="resources-list">
        {/* Resource 1 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_40b04735c0974e0da0143b78d2f6544e~mv2.png/v1/fill/w_97,h_94,al_c,lg_1,q_85,enc_avif,quality_auto/684782_40b04735c0974e0da0143b78d2f6544e~mv2.png"
            alt="Ann Theodore Foundation Scholarship"
            className="resource-logo"
          />
          <h3>ANN THEODORE FOUNDATION SCHOLARSHIP</h3>
          <p>
            Breakthrough Manchester has had a long-standing connection with this incredible scholarship that is specifically for Manchester, NH students! Make sure you apply!
          </p>
          <a
            href="https://anntheodorefoundation.org/scholarship-program/"
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
            src="https://static.wixstatic.com/media/684782_5ac1cb30e2cd45758b2994154cda01c5~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_5ac1cb30e2cd45758b2994154cda01c5~mv2.png"
            alt="College Covered"
            className="resource-logo"
          />
          <h3>COLLEGE COVERED</h3>
          <p>
            College Covered includes some excellent tips, suggestions, and guides for everything from applying to college to paying for college.
          </p>
          <a
            href="https://www.collegecovered.com/"
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
            src="https://static.wixstatic.com/media/684782_a3aa2eb39e1b447e803dc2ded5959a63~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_a3aa2eb39e1b447e803dc2ded5959a63~mv2.png"
            alt="College Xpress"
            className="resource-logo"
          />
          <h3>COLLEGE XPRESS</h3>
          <p>
            College Xpress works to match you with colleges and scholarships that are unique to your skills and characteristics.
          </p>
          <a
            href="https://www.collegexpress.com/"
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
            src="https://static.wixstatic.com/media/684782_622c4eeee65243d19ca286b9fb061d2d~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_622c4eeee65243d19ca286b9fb061d2d~mv2.jpg"
            alt="Unigo"
            className="resource-logo"
          />
          <h3>UNIGO</h3>
          <p>
            Unigo offers over 3.6 Million in Scholarships and Grants through its easy-to-search and apply database.
          </p>
          <a
            href="https://www.unigo.com/"
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
            src="https://static.wixstatic.com/media/684782_2a137356dabe4926beaa82b7e22d257e~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_2a137356dabe4926beaa82b7e22d257e~mv2.png"
            alt="CollegeBoard Calculator"
            className="resource-logo"
          />
          <h3>COLLEGEBOARD CALCULATOR</h3>
          <p>
            Once you receive award letters, the CollegeBoard calculator can help you compare colleges and think about what the real cost will actually be.
          </p>
          <a
            href="https://bigfuture.collegeboard.org/pay-for-college/get-help-paying-for-college/scholarships-grants-institutional-aid/understanding-your-financial-aid-award-offers"
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
            src="https://static.wixstatic.com/media/684782_1cbeb1059c5a481da4dc01f2925d6bcf~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_1cbeb1059c5a481da4dc01f2925d6bcf~mv2.png"
            alt="MyIntuition Quick Cost Calculator"
            className="resource-logo"
          />
          <h3>MYINTUITION QUICK COST CALCULATOR</h3>
          <p>
            Colleges and universities are required to have a net cost calculator on their websites, but those can be complicated and take a long time to complete. The quick cost calculator can let you know the net price (after financial aid) of a number of colleges and universities within minutes. Try it out!
          </p>
          <a
            href="https://myintuition.org/quick-college-cost-estimator/"
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
            src="https://static.wixstatic.com/media/684782_854c5425ac9e48a5a8e7a221ad7e57a2~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_854c5425ac9e48a5a8e7a221ad7e57a2~mv2.jpg"
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

        {/* Resource 8 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_f5378840d8cc48d4835d52fa70e38467~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_f5378840d8cc48d4835d52fa70e38467~mv2.png"
            alt="AffordableColleges.com"
            className="resource-logo"
          />
          <h3>AFFORDABLECOLLEGES.COM</h3>
          <p>
            Affordable Colleges.com has a comprehensive guide for the financial aid application process in addition to other resources on paying for college.
          </p>
          <a
            href="https://www.affordablecollegesonline.org/"
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
            src="https://static.wixstatic.com/media/684782_8d9088738b4e4a9fb06c10c1df0576f4~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_8d9088738b4e4a9fb06c10c1df0576f4~mv2.png"
            alt="Fair Opportunity Project"
            className="resource-logo"
          />
          <h3>FAIR OPPORTUNITY PROJECT</h3>
          <p>
            The Fair Opportunity Project features a comprehensive guide on applying and paying for college. You can download a PDF of the guide directly from the website for free!
          </p>
          <a
            href="https://www.fairopportunityproject.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 10 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_21ef1ac8019147829e9f1112103e4cb1~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_21ef1ac8019147829e9f1112103e4cb1~mv2.png"
            alt="Scholarships.com"
            className="resource-logo"
          />
          <h3>SCHOLARSHIPS.COM</h3>
          <p>
            Search over 3.7 Million College Scholarships and Grants. Create an account quickly and easily and then get recommended scholarships based on your interests and profile.
          </p>
          <a
            href="https://www.scholarships.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 11 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_114068a248d14810a4ea45dc3ddd18f7~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_114068a248d14810a4ea45dc3ddd18f7~mv2.jpg"
            alt="NHCF"
            className="resource-logo"
          />
          <h3>NHCF</h3>
          <p>
            The New Hampshire Charitable Foundation is the largest provider of publicly available scholarships in New Hampshire, awarding more than $5.5 million to more than 1,500 promising students each year.
          </p>
          <a
            href="https://www.nhcf.org/how-can-we-help-you/apply-for-a-scholarship/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 12 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_699fc5160afd489fb4e2111a64cc476a~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_699fc5160afd489fb4e2111a64cc476a~mv2.png"
            alt="Fastweb!"
            className="resource-logo"
          />
          <h3>FASTWEB!</h3>
          <p>
            Fastweb gives you immediate access to a large searchable database of over 1.5 million scholarship opportunities. Additionally, the site features guides and tips on financial aid, college search, and even career advice.
          </p>
          <a
            href="https://www.fastweb.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 13 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_439cc61e30064f03a47913986ef08f09~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_439cc61e30064f03a47913986ef08f09~mv2.jpg"
            alt="Cappex"
            className="resource-logo"
          />
          <h3>CAPPEX</h3>
          <p>
            After creating an account, you can sort scholarship matches by difficulty of application, funds awarded, and even level of competition. Cappex also offers a whole suite of college planning resources through their new collaboration with College Greenlight!
          </p>
          <a
            href="https://www.appily.com/scholarships"
            target="_blank"
            rel="noopener noreferrer"
            className="resource-link"
          >
            Visit Website
          </a>
        </div>

        {/* Resource 14 */}
        <div className="resource-card">
          <img
            src="https://static.wixstatic.com/media/684782_79b5b00fae51450e9c75b16c2f9f0c7d~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_79b5b00fae51450e9c75b16c2f9f0c7d~mv2.jpg"
            alt="GoingMerry"
            className="resource-logo"
          />
          <h3>GOINGMERRY</h3>
          <p>
            Once students create their account and profile on GoingMerry, they can search for, be matched with, and even apply for scholarships directly from the website.
          </p>
          <a
            href="https://goingmerry.com/"
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

export default PayingForCollege;
