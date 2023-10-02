import React, { useState, useCallback } from "react";
import "./PropertyCalculations.css";

const PropertyCalculations = ({ property }) => {
  const [homePrice, setHomePrice] = useState(property.price || 0);
  const [downPaymentPercentage, setDownPaymentPercentage] = useState(20);
  const [downPayment, setDownPayment] = useState(
    (homePrice * downPaymentPercentage) / 100
  );
  const [interestRate, setInterestRate] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [showDetails, setShowDetails] = useState(false);

  const updateDownPayment = useCallback(() => {
    setDownPayment((homePrice * downPaymentPercentage) / 100);
  }, [homePrice, downPaymentPercentage]);

  const toggleDetails = useCallback(() => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  }, []);

  const calculateROI = () => {
    // Calculation Logic
    // return roi;
  };

  const calculateMortgage = () => {
    // Calculation Logic
    // return mortgage;
  };

  const estimateRent = () => {
    // Fetching Logic or Calculation Logic
    // return rent;
  };

  const estimateCost = () => {
    // Calculation Logic
    // return cost;
  };

  const calculateCashFlow = () => {
    // Calculation Logic
    // return cashFlow;
  };

  return (
    <div className="property-calculations">
      <h3 onClick={toggleDetails}>
        Estimated Monthly Cost {/* Calculation here */} <span>{showDetails ? "▲" : "▼"}</span>
      </h3>
      {showDetails && (
        <div className="details">
          <div className="calculator-section" id="principal-interest">
            <label className="full-width">
              Home Price:
              <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} />
            </label>
            <div className="split">
              <label>
                Down Payment:
                <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} />
              </label>
              <label>
                Down Payment Percentage:
                <input
                  type="number"
                  value={downPaymentPercentage}
                  onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
                />
                %
              </label>
            </div>
            <label className="full-width">
              Loan Term:
              <select value={loanTerm} onChange={(e) => setLoanTerm(Number(e.target.value))}>
                <option value={30}>30-year fixed</option>
                <option value={15}>15-year fixed</option>
                <option value={5}>5-year ARM</option>
              </select>
            </label>
            <label className="full-width">
              Interest Rate:
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
              />
              %
            </label>
          </div>
          {/* More calculator sections go here */}
        </div>
      )}
    </div>
  );
};

export default PropertyCalculations;
