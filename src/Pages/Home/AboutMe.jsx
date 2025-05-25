import React from "react";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--container">
        <div className="about--section--img">
          <img
            src={process.env.PUBLIC_URL + "/img/kishanimg.png"}
            alt="Kishan"
          />
        </div>

        <div className="about--section--content">
          <h2 className="section--title">About Me</h2>
          <h3 className="about--section--title">
            Frontend Developer & Competitive Programmer
          </h3>
          <p className="about--bio">
            I'm a passionate frontend and React developer focused on crafting
            responsive, intuitive UIs. I'm also a competitive programmer skilled
            in C++, DSA, and problem solving.
          </p>

          <div className="about--info--grid">
            <ul>
              <li>
                <strong>Birthday:</strong> 02/10/2003
              </li>
              <li>
                <strong>Website:</strong> Not Available
              </li>
              <li>
                <strong>Phone:</strong> +91 8957378067
              </li>
              <li>
                <strong>City:</strong> Mirzapur
              </li>
            </ul>
            <ul>
              <li>
                <strong>Age:</strong> 21
              </li>
              <li>
                <strong>Degree:</strong> B.Tech in ECE
              </li>
              <li>
                <strong>Email:</strong> kishan895737@gmail.com
              </li>
              <li>
                <strong>Freelance:</strong> Available
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="about--education">
        <h4>🎓 Education</h4>
        <div className="timeline">
          <div className="timeline-item left">
            <div className="timeline-content">
              <h5>
                <i className="fas fa-graduation-cap"></i>
                👨🏻‍🎓 Madan Mohan Malaviya University Of Technology, Gorakhpur
              </h5>
              <small>B.Tech in ECE (2022–2026)</small>
              <p>
                <strong>CGPA:</strong> 8.28 till 5th Semester
                <br />
                Specialization in Embedded Systems and IoT.
                <br />
                Relevant Courses: Microcontrollers, Digital Signal Processing,
                Communication System.
              </p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h5>
                <i className="fas fa-school"></i>
                🏫 Swami Harsewanand Public School, Ramana, Banpurwa, Varanasi
              </h5>
              <small>Class 12 (2020–21) - CBSE Board</small>
              <p>
                <strong>Percentage:</strong> 93.4%
                <br />
                Stream: Science (Physics, Chemistry, Mathematics, Physical
                Education)
              </p>
            </div>
          </div>

          <div className="timeline-item left">
            <div className="timeline-content">
              <h5>
                <i className="fas fa-school-flag"></i>
                🏫 Swami Harsewanand Public School, Churk, Sonebhadra
              </h5>
              <small>Class 10 (2018–19) - CBSE Board</small>
              <p>
                <strong>Percentage:</strong> 94.8%
                <br />
                Focus on Science and Mathematics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
