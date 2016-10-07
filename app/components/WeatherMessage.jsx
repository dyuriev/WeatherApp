import React from 'react';

let WeatherMessage = ({location, temp}) => {
  return (
    <h3 className="text-center">It's {Math.round(temp)} in {location}.</h3>
  );
};

module.exports = WeatherMessage;
