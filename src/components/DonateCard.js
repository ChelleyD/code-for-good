import React from "react";
import "../styles/Donation.css";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';


function DonateCard({ name, note, pictures,give}) {
  return (
    <div className="donate-card">
      <div className="donate-image-container">
        <img src={pictures} alt={name} />
      </div>
      <div className="donate-content">
        <h2>{name}</h2>
        <p>{note}</p>

        

        
      </div>
      <Button
          className="donate-btn1"
          variant="contained">
            <Link href={give} target="_blank" underline="none">
          Donate
          </Link>
          </Button>
    </div>
  );
}

export default DonateCard;
