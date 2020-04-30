import React from "react";
import Paper from "@material-ui/core/Paper"
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import { Grid, Col, Row } from "react-flexbox-grid";
import "./App.css";
import LocationList from "./components/LocationList.component";

const cities = [
  "medellín,co",
  "bogotá, co",
  "londres, ing",
  "Buenos Aires, ar",
  "Ciudad de México, mx",
  "Madrid, es",
];

function App() {
  const handleSelectedLocation = (city) => {
    console.log(`handleSelectedLocation ${city}`);
  };

  return (
    <Grid>
      <AppBar position='sticky'>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Weather App
          </Typography>
        </Toolbar>
      </AppBar>
      <Row>
        <Col xs={12} md={6}>
          <LocationList
            cities={cities}
            onSelectedLocation={handleSelectedLocation}
          />
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
            <div className="details">
              hola
            </div>
          </Paper>
        </Col>
      </Row>
    </Grid>
  );
}

export default App;
