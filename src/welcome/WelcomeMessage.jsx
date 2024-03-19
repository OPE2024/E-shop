// WelcomeMessage.js

import React from "react";

const WelcomeMessage = ({ selectedCountry }) => {
  return (
    <div className="welcome-message">
      Welcome from {selectedCountry.label}! Oasis welcomes you.
    </div>
  );
};

export default WelcomeMessage;
