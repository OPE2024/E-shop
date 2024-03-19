import React, { useState } from "react";
import "./Footer.scss";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";

const Footer = () => {
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [userMessage, setUserMessage] = useState("");

  const toggleSupport = () => {
    setIsSupportOpen(!isSupportOpen);
  };

  const sendMessage = () => {
    // Assuming you want to provide feedback immediately
    setFeedback("Thank you for contacting us! We'll get back to you shortly.");
    // You can also send the user's message to your backend or handle it as needed
  };

  const handleUserMessageChange = (e) => {
    setUserMessage(e.target.value);
  };

  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1 className="heading">Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1 className="heading">Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1 className="heading">About</h1>
          <span>
            A one-stop-shop for diverse clothing needs, catering to women, men, and children with options ranging from casual to formal wear.
          </span>
        </div>
        <div className="item">
          {/* <h1 className="heading">Contact</h1> */}
          {/* <span>+234 708 949 2600</span> */}
        </div>
      </div>

      <div className={`support${isSupportOpen ? " expanded" : ""}`}>
        <h1 className="heading">Contact 📞</h1>
        <div className="message-box">
          <textarea
            placeholder="Type your message..."
            value={userMessage}
            onChange={handleUserMessageChange}
          />
          <button onClick={sendMessage}>
            <SendIcon />
            SEND
          </button>
        </div>
        <div className="icons">
          <button>
            <EmailIcon />
          </button>
        </div>
      </div>
      <button className="support-toggle" onClick={toggleSupport}>
        {isSupportOpen ? "Close Support" : "Open Support"}
      </button>
      <div className="bottom">
        <div className="left">
          <span className="logo">Oasis</span>
          <span className="copyright">© Copyright 2024. All Rights Reserved</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="Accepted Payment Methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
