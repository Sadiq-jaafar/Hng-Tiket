import React from "react";
import { TicketData } from "../types"; // Import the interface
import "./Confirmation.css";

interface Props {
  ticketData: TicketData;
}

const TicketConfirmation: React.FC<Props> = ({ ticketData }) => {
  return (
    <div className="ticket-confirmation">
      <div className=""><h2>Your Ticket is Booked!</h2></div>
      <div className="text">
      Check your email for a copy or you can <span>download</span>
      </div>
      <div className="ticket-container">
        <div className="ticket">
        <div className="img-container">
        <img src="./assets/Ellipse 2.png" alt="elips" className="image" />
        <img src="./assets/Ellipse 2.png" alt="elips" className="image" />

        </div>
        
        <div className="container">
       <div className="main">
       <div className="title">
            <h1>Techember Fest ”25</h1>
            <div className="deet">
            <span className="deet1">📍 04 Rumens road, Ikoyi, Lagos</span>
            <span className="deet3">📅 March 15, 2025 | 7:00 PM</span>
          </div>
          <div className="user-image"></div>
          </div>
       <p>Name: {ticketData.name}</p>
      <p>Email: {ticketData.email}</p>
      <p>Ticket Type: {ticketData.ticketType}</p>
       </div>
        </div>
        </div>
          
      
      </div>

      <div className="navigation">
      <button className="download-button">Download Ticket</button>
      <button className="back-button" onClick={() => window.location.reload()}>
        Back to Start
      </button>
      </div>
     
    </div>
  );
};

export default TicketConfirmation;