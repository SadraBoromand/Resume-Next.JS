import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function Portfolio(props) {
  const { portfolio } = props;
  const imagePath = "/assets/img/portfolio/";

  return (
    <main id="main">
      <Head>
        <title>Portfolio</title>
      </Head>
      <section id="portfolio" className="portfolio">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p></p>
          </div>

          <div className="row container">
            {portfolio.map((item, index) => (
              <div key={index} className="col-lg-6">
                <div className="portfolio-wrap my-3">
                  <Image
                    src={imagePath + item.image}
                    className="img-fluid"
                    alt={item.title}
                    width={200}
                    height={200}
                    layout="responsive"
                  />
                  <div className="portfolio-info d-flex justify-content-center align-items-center">
                    <h4>{item.title}</h4>
                    <p>{item.title}</p>
                    <div className="portfolio-links">
                      <Link href={imagePath + item.image}>
                        <a
                          data-gallery="portfolioGallery"
                          className="portfolio-lightbox"
                          title={item.title}
                        >
                          <i className="bx bx-plus"></i>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
