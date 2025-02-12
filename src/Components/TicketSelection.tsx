import React from "react";
import { TicketData } from "../types";
import "./TicketSelection.css";

interface Props {
  setStep: (step: number) => void;
  setTicketData: (data: TicketData) => void;
  ticketData: TicketData;
}

// Fixed typo in component props (Prbuttonops → Props)
const TicketSelection: React.FC<Props> = ({ setStep, setTicketData, ticketData }) => {
  const selectTicket = (type: string) => {
    setTicketData({ ...ticketData, ticketType: type });
  };

  return (
    <div className="form-container">
      <div className="ticket-header">
        <h2>Ticket Selection</h2> 
        <span>1/3</span>
      </div>
      <div className="progress-container">
        <div className="progress"></div>
      </div>
      
      <div className="cad-container">
        <div className="card-hero">
          <div className="main">
            <h1>Techember Fest ”25</h1>
            <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          </div>
          <div className="deet">
            <span className="deet1">📍 [Event Location]</span>
            <span className="deet2">| |</span>
            <span className="deet3">March 15, 2025 | 7:00 PM</span>
          </div>
        </div>
        <div className="porgress2"></div>
        <div className="p2"></div>
        <div className="btn-container">
          <button className="ticket-button" onClick={() => selectTicket("Regular")}>
            <span className="t1">Free</span>
            <span className="t2">REGULAR ACCESS</span>
            <span className="t3">20/52</span>
          </button>
          <button className="ticket-button" onClick={() => selectTicket("VIP")}>
            <span className="t1">$150</span>
            <span className="t2">VIP ACCESS</span>
            <span className="t3">20/52</span>
          </button>
          <button className="ticket-button" onClick={() => selectTicket("VVIP")}>
            <span className="t1">$150</span>
            <span className="t2">VVIP ACCESS</span>
            <span className="t3">20/52</span>
          </button>
        </div>
        <div className="txtt">Number of Tickets</div>
        <div className="input">
          {/* Changed input type to "number" for better UX */}
          <input type="number" min="1" max="10" defaultValue="1" />
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.293 8.29309L12 12.5861L7.70697 8.29309L6.29297 9.70709L12 15.4141L17.707 9.70709L16.293 8.29309Z" fill="white"/>
          </svg>
        </div>
        <div className="navigation-buttons">
          <button className="back-button" onClick={() => setStep(1)}>
            Cancel
          </button>
          <button
            className="next-button"
            onClick={() => setStep(2)}
            disabled={!ticketData.ticketType}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;