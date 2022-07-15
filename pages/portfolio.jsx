import { Fragment } from "react";
import Portfolio from "../components/portfolio/portfolio";
import getPortfolio from "../lib/portfolio-util";

function PortfolioPage(props) {
  return (
    <Fragment>
      <Portfolio portfolio={props.portfolio} />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const portfolio = await getPortfolio();
  return {
    props: {
      portfolio: portfolio,
    },
  };
}

export default PortfolioPage;
