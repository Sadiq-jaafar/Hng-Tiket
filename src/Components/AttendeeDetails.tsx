import React, { useState, useCallback } from "react";
import { TicketData } from "../types";
import "./AttendeeDetails.css";

interface Props {
  setStep: (step: number) => void;
  setTicketData: (data: TicketData) => void;
  ticketData: TicketData;
}

const AttendeeDetails: React.FC<Props> = ({ setStep, setTicketData, ticketData }) => {
  const [name, setName] = useState(ticketData.name);
  const [email, setEmail] = useState(ticketData.email);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");
  const [isDragging, setIsDragging] = useState(false);
  const [specialRequest, setSpecialRequest] = useState(ticketData.specialRequest);

  const handleNext = () => {
    if (!file) {
      setError('Profile photo is required');
      return;
    }
    
    setTicketData({
      ...ticketData,
      name,
      email,
      photo: file,
      specialRequest
    });
    setStep(3);
  };

  const handleFileChange = (selectedFile: File) => {
    if (selectedFile.type && !selectedFile.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    if (selectedFile.size > 5 * 1024 * 1024) {
      setError('File size should be less than 5MB');
      return;
    }
    setFile(selectedFile);
    setError('');
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) handleFileChange(droppedFile);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  return (
    <div className="attendee-details">
      <div className="title">
        <h2>Attendee Details</h2>
        <span>Step 2/3</span>
      </div>
      <div className="progress-container">
        <div className="progress"></div>
      </div>
      <div className="form-Container">
        <div className="profile-upload">
          <div className="profile-text">Upload Profile Photo</div>
          <div 
            className={`drop-zone ${isDragging ? 'dragging' : ''} ${error ? 'error' : ''}`}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onClick={() => document.getElementById('file-input')?.click()}
          >
            <div className="drop-location">
              <svg className="drop-svg" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M25.2639 14.816C24.6812 10.2267 20.7505 6.66669 16.0052 6.66669C12.3305 6.66669 9.13854 8.81469 7.68121 12.2C4.81721 13.056 2.67188 15.76 2.67188 18.6667C2.67188 22.3427 5.66254 25.3334 9.33854 25.3334H10.6719V22.6667H9.33854C7.13321 22.6667 5.33854 20.872 5.33854 18.6667C5.33854 16.7947 6.93721 14.9907 8.90254 14.6454L9.67721 14.5094L9.93321 13.7654C10.8705 11.0307 13.1972 9.33335 16.0052 9.33335C19.6812 9.33335 22.6719 12.324 22.6719 16V17.3334H24.0052C25.4759 17.3334 26.6719 18.5294 26.6719 20C26.6719 21.4707 25.4759 22.6667 24.0052 22.6667H21.3385V25.3334H24.0052C26.9465 25.3334 29.3385 22.9414 29.3385 20C29.337 18.8047 28.9347 17.6444 28.196 16.7047C27.4574 15.7649 26.425 15.0999 25.2639 14.816Z" fill="#FAFAFA"/>
                <path d="M17.3385 18.6667V13.3334H14.6719V18.6667H10.6719L16.0052 25.3334L21.3385 18.6667H17.3385Z" fill="#FAFAFA"/>
              </svg>
              <p>{file ? file.name : 'Drag & drop or click to upload'}</p>
            </div>
            <input 
              id="file-input"
              type="file"
              hidden
              accept="image/*"
              onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
            />
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
        <div className="separator"></div>
        <div className="text-1">Enter your name</div>
        <input
          className="attendee-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="text-2">Enter your email *</div>
        <div className="email-input">
          <svg 
            className="email-icon" 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none"
          >
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19 18H5C4.45 18 4 17.55 4 17V8L10.94 12.34C11.59 12.75 12.41 12.75 13.06 12.34L20 8V17C20 17.55 19.55 18 19 18ZM12 11L4 6H20L12 11Z" 
                  fill="#FAFAFA"/>
          </svg>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="hello@avioflagos.io"
          />
        </div>
        <div className="text-3">
          Special request?
        </div>
        <textarea 
          className=""
          value={specialRequest}
          onChange={(e) => setSpecialRequest(e.target.value)}
          placeholder="Enter special requests (optional)"
        />
        <div className="navigation-buttons">
          <button className="back-button" onClick={() => setStep(1)}>
            Back
          </button>
          <button
            className="next-button"
            onClick={handleNext}
            disabled={!name || !email || !file}
          >
            Get My Free Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default AttendeeDetails;