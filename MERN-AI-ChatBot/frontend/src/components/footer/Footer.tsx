import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div
        style={{
          width: "100%",
          minHeight: "20vh",
          maxHeight: "30vh",
          marginTop: 60,
        }}
      >
        <p style={{ fontSize: "30px", textAlign: "center", padding: "20px" }}>
          Built With love by
          <span>
            <Link
              style={{ color: "white" }}
              className="nav-link"
              to={"https://www.facebook.com/vinh.cau.54"}
            >
              Nguyen Anh Vinh Coders
            </Link>
          </span>
          📖
        </p>
      </div>
    </footer>
  );
};

export default Footer;
