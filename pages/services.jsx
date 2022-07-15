import { Fragment } from "react";
import Head from "next/head";
import Services from "../components/services/services";

function ServicesPage() {
  return <Fragment>
      <Head>
        <title>My Services</title>
      </Head>
      <Services />
  </Fragment>;
}

export default ServicesPage;
