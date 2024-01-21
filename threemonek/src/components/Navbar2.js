import React from "react";
import "./Navbar2.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Σｕｒｅｋａ！
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Search For
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="option1"
                        checked
                      />
                      <label class="form-check-label" for="exampleRadios1">
                        Courses
                      </label>
                    </div>
                  </li>
                  <li>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        value="option2"
                      />
                      <label class="form-check-label" for="exampleRadios2">
                        Keywords
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                ></input>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
            <div class="log-out">
              <button class="btn btn-outline-danger" type="submit">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}