import Link from "next/link";

function Header() {
  return (
    <header id="header" className="fixed-top">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo me-auto me-lg-0">
          <Link href="/">
            <a>Sadra</a>
          </Link>
        </h1>
        {/* <!-- Uncomment below if you prefer to use an image logo --> */}
        {/* <!-- <a href="index.html" className="logo"><img src="assets/img/logo.png" alt="" className="img-fluid"></a>--> */}

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="resume">
                <a>Resume</a>
              </Link>
            </li>
            <li>
              <Link href="services">
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link href="portfolio">
                <a>Portfolio</a>
              </Link>
            </li>
            <li>
              <Link href="getResume/Sadra Resume.pdf">
                <a className="btn btn-sm btn-info text-white rounded-pill">
                  Get Full Resume
                </a>
              </Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* <!-- .navbar --> */}

        <div className="header-social-links">
          <Link href="https://twitter.com/sadrabroo">
            <a className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
          </Link>
          <Link href="https://github.com/msbsoft2">
            <a className="facebook">
              <i className="bi bi-github"></i>
            </a>
          </Link>
          <Link href="https://www.instagram.com/msbsoft2/">
            <a className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/sadrabroo/">
            <a className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
