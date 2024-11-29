import React, { useState } from 'react';

const SquareRootCalculator = () => {
  const [number, setNumber] = useState('');
  const [showSteps, setShowSteps] = useState(false);
  const [result, setResult] = useState(null);
  const [stepDetails, setStepDetails] = useState([]);

  const calculateSquareRoot = () => {
    // Reset previous calculations
    setStepDetails([]);
    setResult(null);

    // Validate input
    const num = parseInt(number);
    if (isNaN(num) || num < 0) {
      setResult("Invalid input. Please enter a non-negative integer.");
      return;
    }

    // Calculation logic similar to Python script
    let subnum = 1;
    let times = 0;
    let remainingNum = num;
    const startTime = Date.now();
    const steps = [];

    while (remainingNum >= 0) {
      const currentTime = Date.now();
      const totalTime = ((currentTime - startTime) / 1000).toFixed(1);

      steps.push({
        seconds: totalTime,
        times,
        subnum,
        remainingNum
      });

      if (remainingNum === 0) {
        setResult(`The square root of the number is: ${times}`);
        break;
      }

      remainingNum -= subnum;
      subnum += 2;
      times += 1;
    }

    if (remainingNum < 0) {
      setResult("The number is not a perfect square.");
    }

    setStepDetails(steps);
  };

  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh',
      backgroundColor: '#f0f0f0',
      padding: '20px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '500px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '20px'
      }}>
        <h2 style={{
          textAlign: 'center', 
          marginBottom: '20px',
          color: '#333'
        }}>
          Square Root Calculator
        </h2>
        
        <div style={{marginBottom: '15px'}}>
          <label 
            htmlFor="number"
            style={{
              display: 'block',
              marginBottom: '5px',
              color: '#555'
            }}
          >
            Number to Calculate
          </label>
          <input 
            type="number" 
            id="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
            style={{
              width: '100%',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          />
        </div>
        
        <div style={{
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '15px'
        }}>
          <input 
            type="checkbox"
            id="show-steps"
            checked={showSteps}
            onChange={(e) => setShowSteps(e.target.checked)}
            style={{marginRight: '10px'}}
          />
          <label 
            htmlFor="show-steps"
            style={{color: '#555'}}
          >
            Show Calculation Steps
          </label>
        </div>
        
        <button 
          onClick={calculateSquareRoot} 
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#f28482',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Calculate Square Root
        </button>

        {result && (
          <div style={{
            marginTop: '20px',
            padding: '10px',
            backgroundColor: '#f8f9fa',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}>
            <p style={{fontWeight: 'bold'}}>{result}</p>
          </div>
        )}

        {showSteps && stepDetails.length > 0 && (
          <div style={{marginTop: '20px'}}>
            <h3 style={{
              marginBottom: '10px',
              color: '#333'
            }}>
              Calculation Steps
            </h3>
            <table style={{
              width: '100%', 
              borderCollapse: 'collapse',
              border: '1px solid #ddd'
            }}>
              <thead>
                <tr style={{backgroundColor: '#f2f2f2'}}>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Seconds</th>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Times</th>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Subnum</th>
                  <th style={{border: '1px solid #ddd', padding: '8px'}}>Num</th>
                </tr>
              </thead>
              <tbody>
                {stepDetails.map((step, index) => (
                  <tr key={index} style={{textAlign: 'center'}}>
                    <td style={{border: '1px solid #ddd', padding: '8px'}}>{step.seconds}</td>
                    <td style={{border: '1px solid #ddd', padding: '8px'}}>{step.times}</td>
                    <td style={{border: '1px solid #ddd', padding: '8px'}}>{step.subnum}</td>
                    <td style={{border: '1px solid #ddd', padding: '8px'}}>{step.remainingNum}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SquareRootCalculator;