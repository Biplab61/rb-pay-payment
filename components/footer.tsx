import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <footer className="footer">
      <h1 className="logo">R B Pay</h1>
      <p className="slogan">
        Shareable Payment&apos;s Link for{" "}
        <img
          src="/images/upi.svg"
          className="upilogo"
          width="40"
          alt="Upi Icon"
        />
      </p>
      <p className="tpf">

      </p>

    </footer>
  );
};

export default Footer;
