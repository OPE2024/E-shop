import React, { useState } from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailSubmitted(true);
    const enteredEmail = e.target.email.value;
    const mailtoLink = `mailto:${enteredEmail}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be in touch with us:</span>

        {emailSubmitted ? (
          <div className="subscription-successful">Subscription successful! Thank you for joining us.</div>
        ) : (
          <div className="mail">
            <form onSubmit={handleEmailSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                aria-label="Email Address"
                required
              />
              <button type="submit" aria-label="Join us">Join Us</button>
            </form>
          </div>
        )}

        <div className="icons">
          {/* Ensure all links are using https */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
            <GoogleIcon />
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            <PinterestIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;