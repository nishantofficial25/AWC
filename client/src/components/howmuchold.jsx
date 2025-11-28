import { useState, useEffect } from "react";

export const ProductAgeInput = ({ value, onChange, className = "" }) => {
  const [manualYears, setManualYears] = useState(
    value?.years.toString() || "0"
  );
  const [manualMonths, setManualMonths] = useState(
    value?.months.toString() || "0"
  );
  const [manualDays, setManualDays] = useState(value?.days.toString() || "0");


  const handleManualUpdate = () => {
    let years = parseInt(manualYears) || 0;
    let months = parseInt(manualMonths) || 0;
    let days = parseInt(manualDays) || 0;

    // Convert days to months if > 30
    if (days > 30) {
      const additionalMonths = Math.floor(days / 30);
      months += additionalMonths;
      days = days % 30;
    }

    // Convert months to years if > 11
    if (months > 11) {
      const additionalYears = Math.floor(months / 12);
      years += additionalYears;
      months = months % 12;
    }

    // Update the input fields with normalized values
    setManualYears(years.toString());
    setManualMonths(months.toString());
    setManualDays(days.toString());

    const totalDays = years * 365 + months * 30 + days;

    onChange?.({
      years,
      months,
      days,
      totalDays,
    });
  };

  const formatAge = (age) => {
    const parts = [];
    if (age.years > 0) parts.push(`${age.years} year${age.years > 1 ? 's' : ''}`);
    if (age.months > 0) parts.push(`${age.months} month${age.months > 1 ? 's' : ''}`);
    if (age.days > 0) parts.push(`${age.days} day${age.days > 1 ? 's' : ''}`);
    return parts.join(', ') || 'Brand new';
  };

  return (
    <>
      <style>{`
        .wrapper {
          max-width: 1200px;
          margin: 20px auto;
          padding: 0 20px;
        }

        .fieldset-container {
          border: 2px solid #ddd;
          border-radius: 12px;
          padding: 30px 20px 20px;
          position: relative;
          background-color: #fff;
        }

        .fieldset-legend {
          position: absolute;
          top: -12px;
          left: 20px;
          background-color: #fff;
          padding: 0 10px;
          font-size: 14px;
          font-weight: 700;
          color: #000000ff;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          
        }

        .date-input-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .input-group label {
          font-size: 16px;
          font-weight: 500;
          color: #333;
        }

        .input-group input {
          width: 100%;
          padding: 16px 20px;
          font-size: 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
          transition: all 0.3s ease;
          outline: none;
        }

        .input-group input:focus {
          border-color: #4a90e2;
          box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
        }

        .input-group input:hover {
          border-color: #bbb;
        }

        .input-group input::-webkit-outer-spin-button,
        .input-group input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .input-group input[type=number] {
          -moz-appearance: textfield;
        }

        @media (max-width: 768px) {
          .wrapper {
            padding: 0 16px;
            margin: 30px auto;
          }

          .fieldset-container {
            padding: 25px 16px 16px;
          }

          .fieldset-legend {
            font-size: 13px;
            left: 16px;
          }

          .date-input-container {
            gap: 12px;
          }

          .input-group label {
            font-size: 14px;
          }

          .input-group input {
            padding: 12px 14px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .wrapper {
            padding: 0 12px;
            margin: 20px auto;
          }

          .fieldset-container {
            padding: 20px 12px 12px;
          }

          .fieldset-legend {
            font-size: 12px;
            left: 12px;
          }

          .date-input-container {
            gap: 8px;
          }

          .input-group label {
            font-size: 13px;
          }

          .input-group input {
            padding: 10px 12px;
            font-size: 13px;
          }
        }
      `}</style>
      <div className="wrapper">
        <div className="fieldset-container">
          <span className="fieldset-legend">
            How much old ?{" "}
            <i style={{ fontWeight: "450", textTransform: "lowercase" }}>
              - Optional
            </i>{" "}
          </span>
          <div className="date-input-container">
            <div className="input-group">
              <label htmlFor="years">Years</label>
              <input
                id="years"
                type="number"
                min="0"
                value={manualYears}
                onChange={(e) => setManualYears(e.target.value)}
                onBlur={handleManualUpdate}
                placeholder="0"
                className="input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="months">Months</label>
              <input
                id="months"
                type="number"
                min="0"
                max="11"
                value={manualMonths}
                onChange={(e) => setManualMonths(e.target.value)}
                onBlur={handleManualUpdate}
                placeholder="0"
                className="input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="days">Days</label>
              <input
                id="days"
                type="number"
                min="0"
                max="30"
                value={manualDays}
                onChange={(e) => setManualDays(e.target.value)}
                onBlur={handleManualUpdate}
                placeholder="0"
                className="input"
              />
            </div>
          </div>
              {(parseInt(manualYears) > 0 || parseInt(manualMonths) > 0 || parseInt(manualDays) > 0) && (
                <div style={{ marginTop: '1rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'rgba(22, 163, 74, 0.05)', border: '1px solid rgba(22, 163, 74, 0.2)', padding: '1rem' }}>
                  <p className="text-sm font-medium text-foreground">
                    Product Age:{" "}
                    <span className="text-accent">
                      {formatAge({
                        years: parseInt(manualYears) || 0,
                        months: parseInt(manualMonths) || 0,
                        days: parseInt(manualDays) || 0,
                        totalDays: 0,
                      })}
                    </span>
                  </p>
                </div>
              )}
        </div>
      </div>
    </>
  );
};
