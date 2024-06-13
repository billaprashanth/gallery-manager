import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "../css/Nav.css";
function Nav() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="/">
            Billa Ganesh
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
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/birthday">
                  Birthday
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/mandapam">
                  Mandapam
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/mangalashnanam">
                  Haldi
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/smallkids">
                  21st Day
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="/reception">
                  Reception
                </a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <a
                className="text-success text-decoration-none fw-100 fs-6 submit-btn"
                href="/contact"
              >
                {" "}
                Contact Us
              </a>
              {/* <button class="submit-btn" type="submit">
                Search
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
