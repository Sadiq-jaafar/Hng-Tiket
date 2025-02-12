import React from "react";
import { TicketData } from "../types";
import "./Confirmation.css";

const TicketConfirmation: React.FC<{ ticketData: TicketData }> = ({ ticketData }) => {
  const photoUrl = ticketData.photo ? URL.createObjectURL(ticketData.photo) : '';

  return (
    <div className="ticket-confirmation">
      <div className="header">
        <h2>Your Ticket is Booked!</h2>
      </div>
      <div className="text">
        Check your email for a copy or you can <span>download</span>
      </div>
      <div className="ticket-container">
        <div className="ticket">
          <div className="img-container">
            <img src="./assets/Ellipse 2.png" alt="decorative" className="image" />
            <img src="./assets/Ellipse 2.png" alt="decorative" className="image" />
          </div>
          
          <div className="container">
            <div className="main1">
              <div className="title1">
                <h1>Techember Fest ”25</h1>
                <div className="detail">
                  <span className="address">📍 04 Rumens road, Ikoyi, Lagos</span>
                  <span className="date">📅 March 15, 2025 | 7:00 PM</span>
                </div>
                {photoUrl && (
                  <div className="user-image">
                    <img src={photoUrl} alt="Attendee" />
                  </div>
                )}
              </div>
              <div className="user-details">
                <div className="cell">
                  <p>Enter your name</p>
                  <span className="cell-span">{ticketData.name}</span>
                </div>
                <div className="cell">
                  <p>Enter your email *</p>
                  <span className="cell-span">{ticketData.email}</span>
                </div>
                <div className="cell">
                  <p>Ticket Type:</p>
                  <span className="cell-span">{ticketData.ticketType}</span>
                </div>
                <div className="cell">
                  <p>Ticket for :</p>
                  <span className="cell-span">{ticketData.quantity}</span>
                </div>
                {ticketData.specialRequest && (
                  <div className="specialcell">
                    <p>Special request?</p>
                    <span className="cell-span">{ticketData.specialRequest}</span>

                  </div>
                )}
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>

      <div className="navigation">
      <button className="back-button" onClick={() => window.location.reload()}>
      Book Another Ticket
        </button>
        <button className="download-button">Download Ticket</button>
        
       
      </div>
    </div>
  );
};

export default TicketConfirmation;