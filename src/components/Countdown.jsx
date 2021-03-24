import React from "react";
import PropTypes from 'prop-types';

const Countdown = (props) => (
    <>
        <h1 className="countdown">{props.name} - {props.hour}:{props.minute}</h1>
    </>
)

Countdown.propTypes = {
    name: PropTypes.string,
    hour: PropTypes.string,
    minute: PropTypes.string
};

export default Countdown;