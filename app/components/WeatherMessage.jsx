var React = require('react');

var WeatherMessage = (props) => {
  var {location, temp} = props;

  return (
    <h3>It's {Math.round(temp)} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
