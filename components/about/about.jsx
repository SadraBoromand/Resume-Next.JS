import Image from "next/image";
import Skills from "../skills/skills";
import Link from "next/link";
import Head from "next/head";

function About(props) {
  const {
    fullName,
    title,
    about,
    email,
    degree,
    city,
    linkedin,
    instagram,
    github,
    languages,
  } = props.info;

  const { skills } = props;

  return (
    <main id="main">
      <Head>
        <title>{fullName} - About Me</title>
      </Head>

      {/* <!-- ======= About Section ======= --> */}
      <section id="about" className="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>About</h2>
            <p className="my-3"></p>
          </div>

          <div className="row">
            <div className="col-lg-4 text-center">
              <Image
                src="/assets/img/about.jpg"
                width="260"
                height="260"
                className="img-fluid rounded-pill border border-5"
                alt=""
              />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content">
              <h3>{title}</h3>

              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>{" "}
                      <strong>Birthday:</strong> 1999
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>Email:</strong> &nbsp;
                      <Link href={email}>
                        <a className="btn btn-sm btn-light border border-3">
                          Send Email Me
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>Freelance:</strong> Available
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>City:</strong> {city}, IRAN
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>Language:</strong>{" "}
                      {languages.split(",").map((language, index) => (
                        <span
                          key={index}
                          className="badge bg-dark rounded-pill mx-2"
                        >
                          {language}
                        </span>
                      ))}
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>Degree:</strong> {degree}
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>Instagram:</strong> &nbsp;
                      <Link href={instagram}>
                        <a className="btn btn-sm btn-light border border-3">
                          See My Instagram
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>Linkedin:</strong> &nbsp;
                      <Link href={linkedin}>
                        <a className="btn btn-sm btn-light border border-3">
                          See My Linkedin Profile
                        </a>
                      </Link>
                    </li>
                    <li>
                      <i className="bi bi-rounded-right"></i>
                      <strong>GitHub:</strong> &nbsp;
                      <Link href={github}>
                        <a className="btn btn-sm btn-light border border-3">
                          See My GitHub Profile
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <h3>About Me</h3>
                <p>{about}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Skills Section ======= --> */}
      <Skills skills={skills} />
      {/* <!-- End Skills Section --> */}
    </main>
  );
}

export default About;
