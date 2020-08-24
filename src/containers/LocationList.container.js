import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';

// Components
import LocationList from "./../components/LocationList.component";
// Actions
import { setCity } from "./../actions";

function LocationListContainer(props) {
  const handleSelectedLocation = (city) => {
		props.setCity(city);
	};
	return <LocationList cities={props.cities} onSelectedLocation={handleSelectedLocation} />;
}

LocationListContainer.propTypes = {
  setCity: PropTypes.func.isRequired,
  cities: PropTypes.array.isRequired
};

const mapDispatchToProps = (dispatch) => ({
	setCity: (value) => dispatch(setCity(value)),
});

export default connect(null,mapDispatchToProps)(LocationListContainer);
