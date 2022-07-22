import React, { useState, useEffect } from "react";
import illustration from "../illustration.png";
import moneybagicon from "../8.png";
import budgeticon from "../9.png";
import paidicon from "../10.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import theme from "../theme";

import { Typography } from "@mui/material";

function Home() {
  const appliedTheme = createTheme(theme);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <ThemeProvider theme={appliedTheme}>
      <div className="container text-center">
        <h4>Start reaching your financial goals, for free!</h4>
        <img src={illustration} alt="illustration" className="home-img" />
        <div>
          <div className="row mt-3 align-center">
            <div className="col-sm">
              <div className="alert alert-primary">
                <h5>
                  Create a Savings Plan <br />{" "}
                  <img src={moneybagicon} alt="saving" width="75px;" />
                </h5>
              </div>
            </div>
            <div className="col-sm">
              <div className="alert alert-primary">
                <h5>
                  Add Customized Budget Boards
                  <img src={budgeticon} alt="budget" width="75px;" />
                </h5>
              </div>
            </div>
            <div className="col-sm">
              <div className="alert alert-primary">
                <h5>
                  [Coming soon!] Links for Fast Bill Pay
                  <img src={paidicon} alt="paid" width="75px;" />
                </h5>
              </div>
            </div>
          </div>
          {/* 
        <label for="cars">Choose Category:</label>
        {/* <img src={cat.icon} alt={cat.name} width="25px;" /> */}
          {/* <select name="categories" id="cars">
          {categories.map((cat) => (
            <option key={cat.id}>{cat.name}</option>
          ))}
        </select> */}

          {/* <ul>
        {categories.map((cat) => (
          <li key={cat.id}>
            <img src={cat.icon} alt={cat.name} width="25px;" />
            {} {cat.name}
          </li>
        ))}
      </ul> */}
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Home;
