import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";
import Home from "../components/home/home";
import getInformation from "../lib/info-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Mohammad Sadra Boromand - WebSite</title>
      </Head>
      <Home info={props.info} />
    </Fragment>
  );
}

export function getServerSideProps() {
  const info = getInformation();
  return {
    props: {
      info: info,
    },
  };
}

export default HomePage;
