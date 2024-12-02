import React from "react";
import "./SummerPrograms.css";

const SummerPrograms = () => {
  return (
    <div className="summer-programs-container">
      <h1>Summer Programming Options</h1>
      <p>Below you will find links to some summer programming options in the New England area.</p>

      <div className="programs-list">
        {/* Program 1 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_d5d0351f2af04ca78d7ba9de5079b1f7~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_d5d0351f2af04ca78d7ba9de5079b1f7~mv2.png"
            alt="Boston University Summer Term"
            className="program-logo"
          />
          <h3>BOSTON UNIVERSITY SUMMER TERM</h3>
          <p>Boston, MA - 1-2 Weeks - Does not offer Financial Aid - Grades 9-12</p>
          <a
            href="https://www.bu.edu/summer/high-school-programs/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 2 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_53a687f9e9824cd0b98fb4b04e679927~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_53a687f9e9824cd0b98fb4b04e679927~mv2.jpg"
            alt="Brewster Academy Summer School"
            className="program-logo"
          />
          <h3>BREWSTER ACADEMY SUMMER SCHOOL</h3>
          <p>Wolfeboro, NH - 4 Weeks - Does not offer Financial Aid - Grades 9-12</p>
          <a
            href="https://www.brewsteracademy.org/summer"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 3 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_8f03e51c0b3b4973a89ae209684428ba~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_8f03e51c0b3b4973a89ae209684428ba~mv2.png"
            alt="Harvard Summer School"
            className="program-logo"
          />
          <h3>HARVARD SUMMER SCHOOL</h3>
          <p>Cambridge, MA - 1-2 Weeks - Offers Financial Aid - Grades 10-12</p>
          <a
            href="https://summer.harvard.edu/high-school-programs/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 4 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_9049a9b9863944058657f1bfbd916bcd~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_9049a9b9863944058657f1bfbd916bcd~mv2.jpg"
            alt="Links Program (Keene)"
            className="program-logo"
          />
          <h3>LINKS PROGRAM (KEENE)</h3>
          <p>Keene, NH - 6 Weeks - Offers Financial Aid - Grade 12</p>
          <a
            href="https://www.keene.edu/office/aspire/links-program/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 5 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_e8f15ff198fd4c0f81431f80e3402d17~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_e8f15ff198fd4c0f81431f80e3402d17~mv2.jpg"
            alt="Phillips Exeter Academy: Exeter Summer"
            className="program-logo"
          />
          <h3>PHILLIPS EXETER ACADEMY: EXETER SUMMER</h3>
          <p>Exeter, NH - 5 Weeks - Offers Financial Aid - Grades 9-12</p>
          <a
            href="https://exeter.edu/exeter-summer/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 6 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_cf3ba59024e54b039264af4643073e83~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_cf3ba59024e54b039264af4643073e83~mv2.png"
            alt="Project Smart (UNH)"
            className="program-logo"
          />
          <h3>PROJECT SMART (UNH)</h3>
          <p>Durham, NH - 4 Weeks - Offers Financial Aid - Grades 10-11</p>
          <a
            href="https://www.smart.unh.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 7 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_7d971dbc57ea4cc9831769d321e4c4a0~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_7d971dbc57ea4cc9831769d321e4c4a0~mv2.jpg"
            alt="St. Paul's School Advanced Studies"
            className="program-logo"
          />
          <h3>ST. PAUL'S SCHOOL ADVANCED STUDIES</h3>
          <p>Concord, NH - 5 Weeks - Offers Financial Aid - Grades 9-12</p>
          <a
            href="https://www.sps.edu/asp-summer"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 8 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_2319222c78924b06a2d90db488e4907b~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_2319222c78924b06a2d90db488e4907b~mv2.jpg"
            alt="The Taft School"
            className="program-logo"
          />
          <h3>THE TAFT SCHOOL</h3>
          <p>Watertown, CT - 5 Weeks - Offers Financial Aid - Grades 9-12</p>
          <a
            href="https://www.taftschool.org/summer"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 9 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_cf3ba59024e54b039264af4643073e83~mv2.png/v1/fill/w_97,h_94,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_cf3ba59024e54b039264af4643073e83~mv2.png"
            alt="Upward Bound (UNH)"
            className="program-logo"
          />
          <h3>UPWARD BOUND (UNH)</h3>
          <p>Durham, NH - 6 Weeks - Offers Financial Aid - Grades 9-12</p>
          <a
            href="https://www.unh.edu/upward-bound/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 10 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_9049a9b9863944058657f1bfbd916bcd~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_9049a9b9863944058657f1bfbd916bcd~mv2.jpg"
            alt="Upward Bound and Spur (Keene)"
            className="program-logo"
          />
          <h3>UPWARD BOUND AND SPUR (KEENE)</h3>
          <p>Keene, NH - 6 Weeks - Offers Financial Aid - Grades 9-12</p>
          <a
            href="https://www.keene.edu/office/ub/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>

        {/* Program 11 */}
        <div className="program-card">
          <img
            src="https://static.wixstatic.com/media/684782_aa3507737ec6487b9dd5dde03c65f3bd~mv2.jpg/v1/fill/w_97,h_94,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/684782_aa3507737ec6487b9dd5dde03c65f3bd~mv2.jpg"
            alt="Wolfeboro: Summer Boarding School"
            className="program-logo"
          />
          <h3>WOLFEBORO: SUMMER BOARDING SCHOOL</h3>
          <p>Wolfeboro, NH - 5 Weeks - Offers Financial Aid - Grades 9-12</p>
          <a
            href="https://www.wolfeboro.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="program-link"
          >
            Visit Program
          </a>
        </div>
      </div>
    </div>
  );
};

export default SummerPrograms;
