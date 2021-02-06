import React from "react";
import "./Footer.css";
import { ArrowDropDown, Language } from "@material-ui/icons";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer_contact">Questions? Contact Us</div>
      <div className="footer_container">
        <div>
          <p>FAQ</p>
          <p>Investor Relations</p>
          <p>Privacy</p>
          <p>Speed Test</p>
        </div>
        <div>
          <p>Help Center</p>
          <p>Jobs</p>
          <p>Cookie Preferences</p>
          <p>Legal Notices</p>
        </div>
        <div>
          <p>Account</p>
          <p>Ways to Watch</p>
          <p>Corporate Informatioon</p>
          <p>Netflix Originals</p>
        </div>
        <div>
          <p>Media Center</p>
          <p>Terms of Use</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="footer_language">
        <button className="footer_button">
          <Language /> <span>English</span> <ArrowDropDown />
        </button>
      </div>
    </div>
  );
};

export default Footer;
