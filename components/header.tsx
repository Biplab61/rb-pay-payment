import type { NextPage } from "next";

import * as gtag from "../analytic/gtag";

interface Props {
  title?: string;
  share?: boolean;
}

const Header: NextPage<Props> = (props) => {
  async function share() {
    if (props.share) {
      try {
        if (navigator.share) {
          await navigator.share({
            title: "Share | RB Pay",
            text: "RB Pay Shareable Secure Payment's Link for UPI :\n",
            url: window.location.href,
          });
          gtag.event({
            action: "clicked_share",
            category: "engagement",
            label: `Shared by user`,
            value: `User clicked share`,
          });
        } else {
          throw new Error("Web share is not sipported !");
        }
      } catch (error) {
        alert((error as object).toString());
      }
    }
  }

  return (
    <header className="header">
      <h1 className="title"><center>{props.title}</center></h1>
    </header>
  );
};

export default Header;
