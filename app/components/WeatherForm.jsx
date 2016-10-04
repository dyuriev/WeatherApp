var React = require('react');

var WeatherForm = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Enter city name"/><br/>
        <button>Get Weather</button>
      </form>
    );
  }
});

module.exports = WeatherForm;
