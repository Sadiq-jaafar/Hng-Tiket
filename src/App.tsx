import React, { useState } from "react";
import Header from "./Components/Header";
import TicketSelection from "./Components/TicketSelection";
import AttendeeDetails from "./Components/AttendeeDetails";
import TicketConfirmation from "./Components/Confirmation";
import { TicketData } from "./types"; // Import the interface
import "./App.css";

const App: React.FC = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState<TicketData>({
    name: "",
    email: "",
    ticketType: "",
    quantity: 1,
    specialRequest: "",
    photo: "",
  });

  return (
    <div className="app-container">
      <Header />
      <div className="content-container">
        {step === 1 && (
          <TicketSelection
            setStep={setStep}
            setTicketData={setTicketData}
            ticketData={ticketData}
          />
        )}
        {step === 2 && (
          <AttendeeDetails
            setStep={setStep}
            setTicketData={setTicketData}
            ticketData={ticketData}
          />
        )}
        {step === 3 && <TicketConfirmation ticketData={ticketData} />}
      </div>
    </div>
  );
};

export default App;