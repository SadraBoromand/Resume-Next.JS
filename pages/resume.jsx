import Link from "next/link";
import { Fragment } from "react";
import Head from "next/head";
import Resume from "../components/resume/resume";

function ResumePage() {
  return (
    <Fragment>
      <Head>
        <title>My Resume</title>
      </Head>
      <Resume />
    </Fragment>
  );
}

export default ResumePage;
