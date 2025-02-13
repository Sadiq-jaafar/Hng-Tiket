import React, { useState, useEffect } from "react";
import { TicketData } from "../types";
import "./TicketSelection.css";

interface Props {
  setStep: (step: number) => void;
  setTicketData: (data: TicketData) => void;
  ticketData: TicketData;
}

const TicketSelection: React.FC<Props> = ({ setStep, setTicketData, ticketData }) => {
  const [quantity, setQuantity] = useState(ticketData.quantity);
  const [errors, setErrors] = useState<{ ticketType?: string; quantity?: string }>({});

  // Accessibility focus management
  useEffect(() => {
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) mainContainer.focus();
  }, []);

  const validateForm = () => {
    const newErrors = {};
    //@ts-expect-error-type
    if (!ticketData.ticketType) newErrors.ticketType = "Please select a ticket type";
    //@ts-expect-error-type
    if (!quantity || quantity < 1) newErrors.quantity = "Quantity must be at least 1";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      setStep(2);
    }
  };

  const selectTicket = (type: string) => {
    setTicketData({ ...ticketData, ticketType: type });
    setErrors(prev => ({ ...prev, ticketType: undefined }));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, Math.min(10, Number(e.target.value)));
    setQuantity(value);
    setTicketData({ ...ticketData, quantity: value });
    setErrors(prev => ({ ...prev, quantity: undefined }));
  };

  const handleKeyDown = (e: React.KeyboardEvent, type: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      selectTicket(type);
    }
  };

  return (
    <div 
      className="form-container"
      role="form"
      aria-labelledby="form-title"
      id="main-container"
      tabIndex={-1}
    >
      <div className="ticket-header">
        <h2 id="form-title">Ticket Selection</h2>
        <span>1/3</span>
      </div>

      <div className="progress-container" role="progressbar" aria-valuenow={33} aria-valuemin={0} aria-valuemax={100}>
        <div className="progress" style={{ width: '33%' }} />
      </div>

      <div className="cad-container">
        <div className="card-hero">
          <div className="main">
            <h1 className="h1">Techember Fest ”25</h1>
            <p>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
          </div>
          <div className="deet">
            <span className="deet1">📍 [Event Location]</span>
            <span className="deet2" aria-hidden="true">| |</span>
            <span className="deet3">March 15, 2025 | 7:00 PM</span>
          </div>
        </div>

        <div className="porgress2" />
        <div className="p2" />

        <div 
          className="btn-container"
          role="group"
          aria-labelledby="ticket-type-label"
        >
          <span id="ticket-type-label" className="visually-hidden">Select ticket type</span>
          
          {['Regular', 'VIP', 'VVIP'].map((type) => (
            <button
              key={type}
              className={`ticket-button ${ticketData.ticketType === type ? 'selected-ticket' : ''}`}
              onClick={() => selectTicket(type)}
              onKeyDown={(e) => handleKeyDown(e, type)}
              role="radio"
              aria-checked={ticketData.ticketType === type}
              aria-labelledby={`${type}-label`}
              tabIndex={0}
            >
              <span className="t1" id={`${type}-label`}>
                {type === 'Regular' ? 'Free' : '$150'}
              </span>
              <span className="t2">{`${type} ACCESS`}</span>
              <span className="t3">20/52</span>
            </button>
          ))}
        </div>

        {errors.ticketType && (
          <div 
            role="alert"
            aria-live="polite"
            className="error-message"
          >
            {errors.ticketType}
          </div>
        )}

        <div className="txtt">Number of Tickets</div>
        <div className="input">
          <input
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={handleQuantityChange}
            aria-label="Number of tickets"
            aria-invalid={!!errors.quantity}
            aria-describedby={errors.quantity ? "quantity-error" : undefined}
          />
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16.293 8.29309L12 12.5861L7.70697 8.29309L6.29297 9.70709L12 15.4141L17.707 9.70709L16.293 8.29309Z" fill="white"/>
          </svg>
        </div>

        {errors.quantity && (
          <div 
            id="quantity-error"
            role="alert"
            aria-live="polite"
            className="error-message"
          >
            {errors.quantity}
          </div>
        )}

        <div className="navigation-buttons">
          <button 
            className="back-button"
            onClick={() => setStep(1)}
            tabIndex={0}
          >
            Cancel
          </button>
          <button
            className="next-button"
            onClick={handleNext}
            disabled={!ticketData.ticketType || !quantity}
            tabIndex={0}
            aria-describedby="next-button-error"
          >
            Next
            {(!ticketData.ticketType || !quantity) && (
              <span id="next-button-error" className="visually-hidden">
                Please select a ticket type and quantity before proceeding
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketSelection;