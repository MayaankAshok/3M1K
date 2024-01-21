import React, { useState, useEffect } from "react";
import { FLASK_URL } from "../Common";
import "./Assignment.css";

export default function Assignment() {
  return (
    <>
      <div class="container">
        <div class="details">
          <div class="content">
            <h2>
              Course Name <br />
              <span>Assignment description</span>
            </h2>
            <p>
              {" "}
              Nisi dolor sunt tempor non ea non laboris culpa et quis non.Esse
              consequat deserunt adipisicing velit id anim do cupidatat.Pariatur
              officia elit et incididunt excepteur ad.
            </p>
            <h3>Rs. 12,800</h3>
            <button>Accept</button>
          </div>
        </div>
      </div>
    </>
  );
}
