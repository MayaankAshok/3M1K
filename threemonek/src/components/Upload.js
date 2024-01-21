import React, { useState, useEffect } from "react";
import { FLASK_URL } from '../Common';

export default function Upload() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState("");
    const [question, setQuestion] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        // Simulate fetching the list of courses from the backend
        // Replace this with an actual API call in your application
        const fetchCourses = async () => {
            // Example API endpoint to fetch courses
            const response = await fetch(FLASK_URL+"/get_courses", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();

            // Assuming the API response is an array of courses
            setCourses(data);
        };

        fetchCourses();
    }, []);

    const handleCourseChange = (e) => {
        setSelectedCourse(e.target.value);
    };

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSubmit = async() => {
        // Perform any necessary validation before submitting the data to the backend
        // You can replace the console.log with an API call to send the data to the backend
        if (!selectedCourse || !question || !price) {
            console.error("Please fill in all fields");
            return;
        }

        try {
            const response = await fetch(FLASK_URL + "/submit_question", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    course: selectedCourse,
                    question: question,
                    price: price,
                }),
            });

            if (response.ok) {
                console.log("Question submitted successfully!");
                // You can reset the form or perform other actions after successful submission
            } else {
                console.error("Failed to submit question");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
        console.log({
            course: selectedCourse,
            question: question,
            price: price,
        });
    };

    return (
        <>
            <div className="upload">
                <h1 className="my-2">Course</h1>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    value={selectedCourse}
                    onChange={handleCourseChange}
                >
                    <option value="" disabled>
                        Choose the course
                    </option>
                    {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                            {course.name}
                        </option>
                    ))}
                </select>
                <div className="box my-3">
                    <div className="mb-5">
                        <h1 className="my-2">Enter the question</h1>
                        <textarea
                            className="form-control-2"
                            id="exampleFormControlTextarea1"
                            rows="10"
                            value={question}
                            onChange={handleQuestionChange}
                        ></textarea>
                    </div>
                </div>
                <div className="box my-3">
                    <div className="mb-5 down">
                        <h1 className="my-2">Enter the price in Rs</h1>
                        <textarea
                            className="form-control-2"
                            id="exampleFormControlTextarea1"
                            rows="1"
                            value={price}
                            onChange={handlePriceChange}
                        ></textarea>
                    </div>
                </div>
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </>
    );
}
