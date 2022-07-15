import { Fragment } from "react";
import About from "../components/about/about";
import Head from "next/head";
import getInformation from "../lib/info-util";
import getAllSkills from "../lib/skill-util";

function AboutPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Mohammad Sadra Boromand - About Me</title>
      </Head>
      <About info={props.info} skills={props.skills} />
    </Fragment>
  );
}

export function getServerSideProps() {
  const info = getInformation();
  const allSkills = getAllSkills();

  return {
    props: {
      info: info,
      skills: allSkills,
    },
  };
}

export default AboutPage;
