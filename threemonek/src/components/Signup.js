import React, { useState } from "react";
import { FLASK_URL } from "../Common";

export default function Signup(prop) {
  const userName = prop.name;
  console.log(userName); 
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    rollno: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(FLASK_URL+"/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success (e.g., redirect to a success page)
        console.log("Registration successful");
      } else {
        // Handle error (e.g., display error message)
        console.error("Registration failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };



  return (
    <>
      <div className="container justify-content-center my-5">
        <div className="row justify-content-center down">
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Register</h5>
                <form method="post" onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      UserName
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="rollno" className="form-label">
                      Roll No.
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="rollno"
                      name="rollno"
                      value={formData.rollno}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
                  </div>
                </form>
                <hr />
                <p className="card-text text-center">
                  <small className="text-muted">
                    Already have an account? <a href="/login">Login here</a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
