import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        id="contact"
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center space-y-2"
      >
        <div>
          Develop & Design AbinSkaria © Copyright 2025
        </div>
        <div className="text-sm">
          Contact us: <a href="tel:+1234567890" className="underline">+1234567890</a> ·
          <a href="mailto:xyz@auroramart.in" className="underline ml-1">xyz@auroramart.in</a>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
