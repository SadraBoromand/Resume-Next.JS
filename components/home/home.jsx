import Link from "next/link";

function Home(props) {
  const {
    fullName,
    title,
    about,
    email,
    city,
    linkedin,
    instagram,
    github,
    languages
  } = props.info;

  return (
    <section id="hero" className="d-flex align-items-center">
      <div
        className="container aos-init aos-animate text-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="d-none d-md-block d-lg-block d-sm-none text-center">
          <h1 className="text-white">{fullName}</h1>
          <h2 className="text-white">{title}</h2>
        </div>
        <div className="d-block d-md-none d-lg-none text-center">
          <h1 className="text-dark">{fullName}</h1>
          <h2 className="text-dark">{title}</h2>
        </div>
        <Link href="about">
          <a className="btn-about">About Me</a>
        </Link>
      </div>
    </section>
  );
}

export default Home;
