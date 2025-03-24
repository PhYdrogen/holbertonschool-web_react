import React from "react";
import "./Footer.css";
import { getFooterCopy, getFullYear } from "../utils/utils";

function Footer() {
  return (
    <>
      <footer className="App-footer">
        Copyright {getFooterCopy()} &copy; {getFullYear()}
      </footer>
    </>
  );
}

export default Footer;
