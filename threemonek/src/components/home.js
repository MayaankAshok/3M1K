import React, { useState, useEffect } from "react";
import "./home.css";
import { FLASK_URL } from "../Common";

export default function Home(prop) {
  const Username = prop.name;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(FLASK_URL + "/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Username),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [cardsData, setCardsData] = useState([]);
  const [CourseData, setCourseData] = useState([]);
  const [UserCourses, setUserCourses] = useState([]);

  useEffect(() => {
    // Fetch data from Flask backend

    const fetchData = async () => {
      try {
          const response = await fetch(FLASK_URL+"/get_feed?username="+Username, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            },
          // body: JSON.stringify(Username),  
        });
        console.log("HIIII")
        const data = await response.json();
        setCardsData(data); // Assuming data is an array of card objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    console.log("WTF")
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    // Fetch data from Flask backend
    const fetchData = async () => {
      try {
        const response = await fetch({ FLASK_URL } + "/allcourses");
        const courses = await response.json();
        setCourseData(courses); // Assuming data is an array of card objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  useEffect(() => {
    // Fetch data from Flask backend
    const fetchData = async () => {
      try {
        const response = await fetch({ FLASK_URL } + "/usercourses");
        const Ucourses = await response.json();
        setUserCourses(Ucourses); // Assuming data is an array of card objects
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  console.log(Username);
  return (
    <>
      <div className="container-home">
        <div className="left">
          <div className="Users-Courses">
            <div className="User-Course-Heading">
              <h1>Your Courses</h1>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Default switch checkbox input
              </label>
            </div>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
              />
              <label class="form-check-label" for="flexSwitchCheckChecked">
                Checked switch checkbox input
              </label>
            </div>
          </div>
          <div className="Other-Courses">
            <div className="Other-Course-Header">
              <h1>Other Courses</h1>
            </div>
            <div class="cards">
              <div class="card-header">Course 3</div>
              <a href="#" class="follow-button">
                Follow
              </a>
            </div>
          </div>
        </div>
        <div
          className="right"
          style={{ overflowY: "auto", maxHeight: "2000px" }}
        >
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
          <div className="card text-center">
            <div className="card-header">card.courseID</div>
            <div className="card-body">
              <h5 className="card-title">card.assignmentID</h5>
              <p className="card-text">card.description</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-body-secondary">
              card.timestamp
            </div>
          </div>
          <div className="card text-center">
            <div className="card-header">card.courseID</div>
            <div className="card-body">
              <h5 className="card-title">card.assignmentID</h5>
              <p className="card-text">card.description</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-body-secondary">
              card.timestamp
            </div>
          </div>
          <div className="card text-center">
            <div className="card-header">card.courseID</div>
            <div className="card-body">
              <h5 className="card-title">card.assignmentID</h5>
              <p className="card-text">card.description</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-body-secondary">
              card.timestamp
            </div>
          </div>
          <div className="card text-center">
            <div className="card-header">card.courseID</div>
            <div className="card-body">
              <h5 className="card-title">card.assignmentID</h5>
              <p className="card-text">card.description</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
            <div className="card-footer text-body-secondary">
              card.timestamp
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
