import React, { useState, useEffect } from "react";
import "./home.css";

export default function Home() {
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Fetch data from Flask backend
    const fetchData = async () => {
      try {
        const response = await fetch("http://your-flask-api-endpoint");
        const data = await response.json();
        setCardsData(data); // Assuming data is an array of card objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <>
      <div className="container">
        <div className="left">
          <h2>Left Container</h2>
          <p>This is the left container.</p>
        </div>
        <div className="right">
          <h2>Right Container</h2>
          {cardsData.map((card, index) => (
            <div key={index} className="card text-center">
              <div className="card-header">{card.courseID}</div>
              <div className="card-body">
                <h5 className="card-title">{card.assignmentID}</h5>
                <p className="card-text">{card.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer text-body-secondary">
                {card.timestamp}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
