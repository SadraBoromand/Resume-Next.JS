import Link from "next/link";

function Resume() {
  return (
    <main id="main">
      <section id="resume" className="resume">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>
            <p>
              For see full my Resume click this link &nbsp;
              <Link href="getResume/Sadra Resume.pdf">
                <a className="btn btn-sm btn-light border border-3">
                  Get Full Resume
                </a>
              </Link>
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Sumary</h3>
              <div className="resume-item pb-0">
                <h4>Mohammad Sadra Boromand</h4>
                <p>
                  <em>
                    Innovative and deadline-driven FullStack web Developer with
                    2+ years of experience designing and developing
                    user-centered website/webApp marketing material from initial
                    concept to final, polished deliverable.
                  </em>
                </p>
                <p></p>
                <ul>
                  <li>Isfahan</li>
                  <li>sadrabroo@gmail.com</li>
                </ul>
                <p></p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Computer Science &amp; Graphic Design</h4>
                <h5>2018 - 2022</h5>
                <p>
                  <em>Isfahan University</em>
                </p>
                <p>I study Computer Science in Isfahan University</p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Backend Developer</h4>
                <h5>2019 - Present</h5>
                <p>
                  <em>Isfahan - IRAN </em>
                </p>
                <p></p>
                <ul>
                  <li>Asp.net Core 3.1 to Up</li>
                  <li>Asp.net Web API</li>
                  <li>Razor View - Razor Page</li>
                  <li>Asp.net MVC</li>
                </ul>
                <p></p>
              </div>
              <div className="resume-item">
                <h4>Frontend Developer</h4>
                <h5>2019 - Present</h5>
                <p>
                  <em>Isfahan - IRAN</em>
                </p>
                <p></p>
                <ul>
                  <li>Template HTML and CSS and Bootstrap and UI Kit</li>
                  <li>Javascript - Typescript</li>
                  <li>React.JS and Next.JS</li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Resume;
