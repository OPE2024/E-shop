// Import the necessary components and hooks
import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null); // State to track selected country
  const products = useSelector((state) => state.cart.products);

  const countries = [
    { value: "us", label: "🇺🇸 United States" },
    { value: "uk", label: "🇬🇧 United Kingdom" },
    { value: "ca", label: "🇨🇦 Canada" },
    { value: "au", label: "🇦🇺 Australia" },
    { value: "de", label: "🇩🇪 Germany" },
    { value: "fr", label: "🇫🇷 France" },
    { value: "jp", label: "🇯🇵 Japan" },
    { value: "br", label: "🇧🇷 Brazil" },
    { value: "in", label: "🇮🇳 India" },
    { value: "cn", label: "🇨🇳 China" },
    { value: "mx", label: "🇲🇽 Mexico" },
    { value: "it", label: "🇮🇹 Italy" },
    { value: "es", label: "🇪🇸 Spain" },
    { value: "za", label: "🇿🇦 South Africa" },
    { value: "ke", label: "🇰🇪 Kenya" },
    { value: "ng", label: "🇳🇬 Nigeria" },
    { value: "eg", label: "🇪🇬 Egypt" },
    { value: "gh", label: "🇬🇭 Ghana" },
    { value: "et", label: "🇪🇹 Ethiopia" },
    { value: "dz", label: "🇩🇿 Algeria" },
  ];

  const handleCountryChange = (selectedOption) => {
    // Update selected country when the dropdown changes
    setSelectedCountry(selectedOption);

    // Show browser notification
    showNotification(selectedOption);
  };

  const showNotification = (selectedOption) => {
    if ("Notification" in window) {
      // Check if the browser supports notifications
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // Create and show the notification
          const notification = new Notification(
            `Welcome from ${selectedOption.label}!`,
            {
              body: "",
            }
          );
          setTimeout(notification.close.bind(notification), 5000); // Close the notification after 5 seconds
        }
      });
    }
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          {/* Use the react-select component for country selection */}
          <Select options={countries} onChange={handleCountryChange} />
          {/* Display welcome message if a country is selected */}
          {selectedCountry && (
            <div className="welcome-message">
              Welcome from {selectedCountry.label}!
            </div>
          )}
          <div className="nav-item">
            <Link className="link" to="/products/1">
              🙋🏿‍♀️
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/2">
              🙋🏿‍♂️
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/products/3">
              👼🏿
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Oasis
          </Link>
        </div>
        <div className="right">
          <div className="nav-item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="nav-item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            {/* Toggle notification icon */}
            <div
              className={`notification-icon ${notificationOpen ? "vibrate" : ""}`}
              onClick={() => setNotificationOpen(!notificationOpen)}
            >
              <NotificationsOutlinedIcon />
              {/* Notification bar with default deal notification */}
              {notificationOpen && (
                <div className="notification-bar">
                  <span className="notification">🛍️</span>
                </div>
              )}
            </div>
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon className="icon" />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
