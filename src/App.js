import React from "react";
import "./App.css";

// Components
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { Grid, Col, Row } from "react-flexbox-grid";
import LocationListContainer from "./containers/LocationList.container";
import ForecastExtendedContainer from "./containers/ForecastExtended.container";

const cities = ["medellín,co", "bogotá, co", "londres, ing", "Buenos Aires, ar", "Ciudad de México, mx", "Madrid, es"];

function App(props) {
	return (
		<Grid>
			<AppBar position="sticky">
				<Toolbar>
					<Typography variant="h6" color="inherit">
						Weather App
					</Typography>
				</Toolbar>
			</AppBar>
			<Row>
				<Col xs={12} md={6}>
					<LocationListContainer cities={cities}></LocationListContainer>
				</Col>
				<Col xs={12} md={6}>
					<Paper zdepth={4}>
						<div className="details">
							<ForecastExtendedContainer />
						</div>
					</Paper>
				</Col>
			</Row>
		</Grid>
	);
}

export default App;
