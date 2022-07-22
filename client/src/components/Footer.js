import React from "react";
import { Typography } from "@mui/material";

function Footer() {
  return (
    <div>
      <div className="footer">
        <Typography type="h6" variant="h6" align="center" color="white">
          Wise | Budget Manager
        </Typography>
        <Typography type="h6" variant="h6" align="center" color="white">
          © 2022, Sam Crespo | Privacy Policy
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
