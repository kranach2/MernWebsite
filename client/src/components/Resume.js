import React from "react";
import Footer from "./Footer";
import styles from "../css/Resume.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
const Resume = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.containerOne}>
        <div className={styles.textOne}>
          <h1 className={styles.headingOne}>Know more about me </h1>
        </div>
      </div>

      <div className={styles.containerTwo}>
        <div className={styles.text}>
          <h1 className={styles.heading}>Summary</h1>
          <p className={styles.para}>
            Have been always intrigued by the innovation and breakthrough in ICT
            since early years of schools which motivated me to pursue career in
            this field, specially in web developemnt. Hands-on experience in web
            development including both frontend and backend. In spite of having
            web development skills, I have 3 months of experience as a ICT
            support officer. Currently seeking an entry-level opportunity where
            I can use my web development skills and knowledge to resolve
            client's web related problems. Being passionate about web
            developement, I have always aspired to become a successful web
            developer that has driven me to further invest my time and efforts
            into web learning, sharing and implementing knowledge into real
            projects.
          </p>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Technical Skills</h1>
          <div className={styles.allList}>
            <div className={styles.listOne}>
              <ul>
                <li className={styles.listOneElement}>HTML5/CSS3</li>
                <li className={styles.listOneElement}>JavaScript(ES6)</li>
                <li className={styles.listOneElement}>React</li>
                <li className={styles.listOneElement}>Redux</li>
                <li className={styles.listOneElement}>Node</li>
                <li className={styles.listOneElement}>SQL(MySQL)</li>
                <li className={styles.listOneElement}>MongoDB</li>
                <li className={styles.listOneElement}>Express</li>
                <li className={styles.listOneElement}>PHP/WordPress</li>
                <li className={styles.listOneElement}>xml/XSLT/XHTML</li>
                <li className={styles.listOneElement}>JSON</li>
              </ul>
            </div>
            <div className={styles.listTwo}>
              <ul>
                <li className={styles.listTwoElement}>CRUD Operations</li>
                <li className={styles.listTwoElement}>REST API</li>
                <li className={styles.listTwoElement}>Axios/Fetch</li>
                <li className={styles.listTwoElement}>Bootstrap</li>
                <li className={styles.listTwoElement}>Project Management</li>
                <li className={styles.listTwoElement}>Version Control ( GIT )</li>
                <li className={styles.listTwoElement}>Microsoft Visual Studio </li>
                <li className={styles.listTwoElement}>MERN Stack app deployment</li>
                <li className={styles.listTwoElement}>Responsive Layout and Design</li>
                <li className={styles.listTwoElement}>Cross-Browser Compatibility</li>
                <li className={styles.listTwoElement}>Exposure to Java and C++</li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Soft Skills</h1>
          <div className={styles.allList}>
            <div className={styles.listOne}>
              <ul>
                <h2 className={styles.listOneHeadingTwo}>Communication</h2>
                <li className={styles.listOneElement}>
                 Verbal Communication
                </li>
                <li className={styles.listOneElement}>
                 Written Communication
                </li>
                <li className={styles.listOneElement}>
                 Presentation
                </li>
                <li className={styles.listOneElement}>
                 Visual Communication
                </li>

                <h2 className={styles.listOneHeadingTwo}>Critical Thinking</h2>
                <li className={styles.listOneElement}>
                 Problem Solving
                </li>
                <li className={styles.listOneElement}>
                 Innovation
                </li>
                <li className={styles.listOneElement}>
                 Research
                </li>
                <li className={styles.listOneElement}>
                  Willingness to learn
                </li>
                <li className={styles.listOneElement}>
                 Troubleshooting
                </li>
                <li className={styles.listOneElement}>
                 Creativity
                </li>
                <li className={styles.listOneElement}>
                 Logical Thinking
                </li>
                <li className={styles.listOneElement}>
                 Resourcefulness
                </li>
                <h2 className={styles.listOneHeadingTwo}>Leadership</h2>
                <li className={styles.listOneElement}>
                 Decision Making
                </li>
                <li className={styles.listOneElement}>
                 Conflict Management
                </li>
                <li className={styles.listOneElement}>
                 Project Management
                </li>
                <li className={styles.listOneElement}>
                 Resolving issues
                </li>
                <li className={styles.listOneElement}>
                 Meeting Management
                </li>
              </ul>
            </div>
            
            <div className={styles.listTwo}>
              <ul>
                <h2 className={styles.listTwoHeadingTwo}>Team Work</h2>
                <li className={styles.listTwoElement}>
                  Collaboration
                </li>
                <li className={styles.listTwoElement}>
                  Interpersonal skills
                </li>
                <li className={styles.listTwoElement}>
                  Networking
                </li>
                <li className={styles.listTwoElement}>
                  Social Skills
                </li>
                <li className={styles.listTwoElement}>
                  Emotional Intelligence
                </li>
                <li className={styles.listTwoElement}>
                  Diversity awareness
                </li>

                <h2 className={styles.listTwoHeadingTwo}>Positive Attitude</h2>
                <li className={styles.listTwoElement}>
                  Passion
                </li>
                <li className={styles.listTwoElement}>
                  Confidence
                </li>
                <li className={styles.listTwoElement}>
                  Honesty
                </li>
                <li className={styles.listTwoElement}>
                  Patience
                </li>
                <li className={styles.listTwoElement}>
                  Respectfulness
                </li>
                <h2 className={styles.listTwoHeadingTwo}>Work Ethic</h2>
                <li className={styles.listTwoElement}>
                  Time Management
                </li>
                <li className={styles.listTwoElement}>
                  Persistence
                </li>
              
                <li className={styles.listTwoElement}>
                  Reliability
                </li>
                <li className={styles.listTwoElement}>
                  Punctuality
                </li>
                <li className={styles.listTwoElement}>
                  Resilience
                </li>
                <li className={styles.listTwoElement}>
                  Self supervising/directing
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Technical Summary</h1>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Sound knowledge of Javascript
            (ES6): arrow function, destructuring, spread operator, rest and
            default parameters, maps, Namees, subclasses, import, export,
            async, await and so on
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> React - Class component,
            component lifecycle (mounting, updating and unmounting), higher
            order component (HOC), state and setState, React context, Functional
            component, React hooks (useState, useEffect, useHistory,
            useLocation, useParams), React router
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Redux - store, reducer, action,
            dispatch, Class Component (connect) Functional component
            (useSelector, useDispatch), redux thunk
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Node- set up environment to run
            node, knowledge of inbuilt modules and external modules
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Good command of structured query
            language for storing, manipulating and retrieving data in databases
            (Select, Insert, Update, Delete, Join) and so on
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Thorough understanding of MongoDB
            and its operations.
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> In-depth knowledge of express web
            application framework for node.js to create server and build web
            applications and APIs.
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Good grasp of server side
            scripting language such as php and content managment system like
            wordpress with hands on experience.
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Comprehensive understanding of
            Restful API along with Get, Put, Post, Delete operations. 
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Good insight of Version Control-
            Git (through command line and VS code)
          </p>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Work Experience</h1>
          <h2 className={styles.headingTwo}>Full Stack Developer</h2>
          <h4 className={styles.headingFour}>
            - Perth, Western Australia (current)
          </h4>
          <br />
          <h3 className={styles.headingThree}>Frontend:</h3>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Has been working with HTML and  CSS3 for design and layout.
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Hands on experience to make regular website to responsive that can well fit into mobile and tablet.
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Day to day work on React. Created own personal website using Reactjs.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> comfortable working with Javascript (ES6). Used to with new functionalities such as arrow function, maps, spread operator, class, destructing and so on. 
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Have experimented with PHP and wordpress.
          </p>
          
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Redux for state managment and axios for http request to backend.
          </p>

          <h3 className={styles.headingThree}>Backend:</h3>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Has worked with Nodejs and it's framework, Express.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Comfortable with both sql such as MySQL and no sql such as MongoDB.
            
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Can perform CRUD opearation and thorough understanding of REST API.
          </p>
          
          <h3 className={styles.headingThree}>Others</h3>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Have worked on version Control such as Git.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> deployed app on cloud-platform such as heroku.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Visual studio code for coding and can commit and push to git repository through it.
          </p>


          <h2 className={styles.headingTwo}>Information Technology Officer</h2>
          <h4 className={styles.headingFour}>
            VenuesWest - Perth, Western Australia (May 2017 - July 2017)
          </h4>
          <br />
          <h3 className={styles.headingThree}>Key Responsiblities:</h3>
          <h4 className={styles.headingThree}>
            System Maintenance and Security
          </h4>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs "></i> Database backups and initiated
            restores as required.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Created network users and
            maintained user access and passwords.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Maintained appropriate security
            measures with reference to user access and passwords.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Maintained the security of Venues
            West's computer based data both in terms of access and historical
            retention.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Monitored and maintained
            antivirus software systems to prevent the introduction of viruse on
            all Venues West computing equipment.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Maintained knowledge and
            awareness of security vulnerabilities and protection.
          </p>

          <h4 className={styles.headingThree}>Software/Hardware Support</h4>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Provided frontline end user
            support for all Venues West business applications.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Maintained appropriate records on
            Help Desk requests.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Configured and installed personal
            computers and printers both stand-alone and networked.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Assisted with the perparation and
            configuration of peripheral devices for attachment to the network
            environment.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Assisted with the installation
            and testing the integrity of any new stand-alone and multi-user
            software prior to allowing user access.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Ensured all the functional ICT
            procedural manuals and end user guides are kept up-to-date and
            distributed as and when required.
          </p>

          <h4 className={styles.headingThree}>Adminstrative Duties</h4>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Ensured computer assests database
            is maintained and balances back to the central register.
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Liaised with IT coordinator and
            other directorates and branches in maintaining variable information
            on Intranet web pages. Monitored and maintained Venues West's
            Intranet web site providing appropriate staff with access and
            assistance as necessary.
          </p>
        </div>
        <div className={styles.text}>
          <h1 className={styles.heading}>Achievement</h1>

          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs "></i> Outstanding performance in the
            undergraduate course with distinction (course average of more than
            70%)
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Scored overall of 87 out of 90 in
            English Test (PTE Academic)
          </p>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Professional Development</h1>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Keeping myself up-to-date on
            latest technological advances and trends through various sources
            including but not limited to websites, youtube and online learning
            platform
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Reading blogs, discussing in
            web-forum and learning from online tutorial site such as
            freeCodeCamp, udemy and so on
          </p>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Awards</h1>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Invited to participate in an
            Honours program (Bachelor's of Information Technology Honours)
          </p>
          <p></p>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Professional Membership</h1>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Australian Computer Society (ACS)
          </p>
          <p className={styles.para}>
            
            <i className="fas fa-list fa-xs"></i> Member of freeCodeCamp.org
          </p>
        </div>
        <div className={styles.text}>
          <h1 className={styles.heading}>Education</h1>

          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> ACS Professional Year Program
            (ICT)
          </p>
          <i className={styles.italic}>
            
            National Institute of Technology (NIT) – Perth, Western Australia
            &nbsp; &nbsp; &nbsp; Sept 2016 – Aug 2017
          </i>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Bachelor Degree in Information
            Technology
          </p>
          <i className={styles.italic}>
            Edith Cowan University – Perth, Western Australia &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Feb 2013 – Jul 2016
          </i>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Hobbies and Interests</h1>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Love to read novels (Digital
            Fortress by Dan Brown, is one of my favourites)
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Travelling 
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Cycling 
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Videos games 
          </p>
        </div>

        <div className={styles.text}>
          <h1 className={styles.heading}>Additional Information</h1>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Permanent Resident
          </p>
          <p className={styles.para}>
            <i className="fas fa-list fa-xs"></i> Full Time Availability
          </p>
        </div>
        
        
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
