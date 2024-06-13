import React from "react";
import "../css/ContactUs.css";

const owners = [
  {
    name: "Billa Ganesh",
    // profilePic: "",
    mobileNumber: "9441701754",
    Address: "Thandrial",
  },
];

const ContactUs = () => {
  return (
    <div className="contact-us">
      {owners.map((owner, index) => (
        <div key={index} className="owner-card">
          {/* <img
            src={owner.profilePic}
            alt={`${owner.name}'s profile`}
            className="profile-pic"
          /> */}
          <h2>{owner.name}</h2>
          <p>{owner.mobileNumber}</p>
          <p>{owner.Address}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactUs;
