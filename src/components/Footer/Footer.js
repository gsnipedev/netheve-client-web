import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "../../App.css";

const Footer = () => {
  return (
    <React.Fragment>
      <Card sx={{ mt: 0, backgroundColor: "transparent", boxShadow: "none" }}>
        <CardContent>
          <Typography className="mukta">
            <span style={{ color: "crimson", fontSize: 20 }} className="memoirs">
              NetHeve
            </span>{" "}
            Andika Co. © 2022
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default Footer;
